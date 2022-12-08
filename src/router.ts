import { addEventDispatcherTrait, EventDispatcher } from './event-dispatcher';

const routes = (window as any).routes = (window as any).routes ?? [];

function routeMatchUrl(route: router.Route, url: string) {
    const testParts = url.split('/').filter((x: string) => x);

    if (testParts.length !== route.parts.length) {
        return false;
    }

    for (let i = 0; i < testParts.length; i += 1) {
        const obj = route.parts[i].paramsObjectFromUrlPart(testParts[i]);
        const routePart = route.parts[i].paramsObjectToUrlPart(obj).toString();

        if (testParts[i] !== routePart && routePart !== undefined) {
            return false;
        }
    }

    return true;
}

function findDefaultRoute(): router.Route {
    const defaultRoute = routes.find((r: router.Route) => r.isDefault);

    if (!defaultRoute) {
        throw new Error('no default route specified ');
    }

    defaultRoute.params = getRouteParams(defaultRoute);
    return defaultRoute;
}

function findRouteByName(routeName: string): router.Route {
    const route = routes.find((r: router.Route) => r.name === routeName)
        ?? findDefaultRoute();

    route.params = getRouteParams(route);
    return route;
}

function findRouteByUrl(url: string): router.Route {
    url = (url ?? '').split('#')[1] ?? '';
    const route = routes.find((route: router.Route) => routeMatchUrl(route, url))
        ?? findDefaultRoute();

    route.params = getRouteParams(route);
    return route;
}

function getCurrentRoute(): router.Route {
    return findRouteByUrl(window.location.href);
}

function getRouteUrl(routeName: string, params?: router.RouteParams) {
    return window.location.pathname + '#' + getRoutePath(routeName, params);
}

function navigate(routeName: string, params?: router.RouteParams): void {
    window.location.href = getRouteUrl(routeName, params);
}

function getRouteParams(route: router.Route) {
    const pathSplit = window.location.hash.slice(1).split('/');
    let params = {};

    for (let i = 0; i < route.parts.length; i += 1) {
        const part = route.parts[i];
        params = { ...params, ...part.paramsObjectFromUrlPart(pathSplit[i]) };
    }

    return params;
}

function getRoutePath(routeName: string, params: router.RouteParams = {}) {
    const route = findRouteByName(routeName);
    return route.parts.map(part => part.paramsObjectToUrlPart(params)).join('/');

}

function addRoute(routeDef: router.RouteDefinition) {
    const { path, defaultParams } = routeDef;
    const parts = path.split('/').filter(x => x).map(partString => {
        return {
            paramsObjectToUrlPart: (params: Record<string, string> = {}) => {
                if (partString[0] === ':') {
                    const varName = partString.substring(1);
                    return params[varName] !== undefined
                        ? encodeURIComponent(params[varName])
                        : (defaultParams?.[varName] ?? '');
                }
                return partString;
            },
            paramsObjectFromUrlPart: (val: string) => {
                if (partString[0] === ':') {
                    const varName = partString.substring(1);
                    return {
                        [varName]: val !== undefined
                            ? decodeURIComponent(val)
                            : defaultParams?.[varName]
                    }
                }
                return {};
            }
        };
    });

    routes.push({ ...routeDef, parts });
}

export interface Router extends EventDispatcher {
    findDefaultRoute(): router.Route;
    findRouteByName(routeName: string): router.Route;
    findRouteByUrl(url: string): router.Route;
    getCurrentRoute(): router.Route;
    getRouteUrl(routeName: string, params?: router.RouteParams): string;
    getRoutePath(routeName: string, params?: router.RouteParams): string;
    navigate(routeName: string, params?: router.RouteParams): void;
    addRoute(initRoute: {
        name: string,
        path: string;
        isDefault?: string,
        defaultParams?: Record<string, string | number>
    }): void;
}

export var router: Router = (window as any).router || addEventDispatcherTrait({
    findDefaultRoute,
    findRouteByName,
    findRouteByUrl,
    getCurrentRoute,
    getRouteUrl,
    getRoutePath,
    navigate,
    addRoute
});

export namespace router {
    export interface Route {
        name: string;
        params: Record<string, string>;
        isDefault: boolean;
        [param: string]: unknown;
        parts: RoutePart[]
    }
    export type RouteParams = Record<string, string | number | boolean>;

    interface RoutePart {
        paramsObjectFromUrlPart(urlPart: string): Record<string, string>;
        paramsObjectToUrlPart(obj: RouteParams): string;
    }

    export interface RouteDefinition {
        name: string;
        path: string;
        isDefault?: boolean;
        defaultParams?: RouteParams;
    }
}

if (!(window as any).router) {
    window.addEventListener('hashchange', function() {
        const route = getCurrentRoute();
        const event = new CustomEvent('routeChange', { detail: route });
        router.trigger(event);
    });
    (window as any).router = router;
}
