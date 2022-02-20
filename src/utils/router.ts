import { addEventDispatcherTrait } from './event-dispatcher';

const routes = (window as any).routes = (window as any).routes ?? [];

type RouteParams = Record<string, string | number | boolean>;

interface RoutePart {
    paramsObjectFromUrlPart(urlPart: string): Record<string, string>;
    paramsObjectToUrlPart(obj: RouteParams): string;
}

export interface StoredRoute {
    name: string;
    params: Record<string, string>;
    isDefault: boolean;
    parts: RoutePart[]
}

export interface RouteDefinition {
    name: string;
    path: string;
    isDefault?: boolean;
    defaultParams?: RouteParams;
}

function routeMatchUrl(route: StoredRoute, url: string) {
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

function findDefaultRoute() {
    const defaultRoute = routes.find((r: StoredRoute) => r.isDefault);

    if (!defaultRoute) {
        throw new Error('no default route specified ');
    }

    defaultRoute.params = getRouteParams(defaultRoute);
    return defaultRoute;
}

function findRouteByName(routeName: string) {
    const route = routes.find((r: StoredRoute) => r.name === routeName)
        ?? findDefaultRoute();

    route.params = getRouteParams(route);
    return route;
}

function findRouteByUrl(url: string) {
    url = (url ?? '').split('#')[1] ?? '';
    const route = routes.find((route: StoredRoute) => routeMatchUrl(route, url))
        ?? findDefaultRoute();

    route.params = getRouteParams(route);
    return route;
}

function getCurrentRoute() {
    return findRouteByUrl(window.location.href);
}

function getRouteUrl(routeName: string, params?: RouteParams) {
    const route = findRouteByName(routeName);
    return window.location.pathname + '#' + getRoutePath(route, params);
}



function navigate(routeName: string, params?: RouteParams): void {
    window.location.href = getRouteUrl(routeName, params);
}

function getRouteParams(route: StoredRoute) {
    const pathSplit = window.location.hash.slice(1).split('/');
    let params = {};

    for (let i = 0; i < route.parts.length; i += 1) {
        const part = route.parts[i];
        params = { ...params, ...part.paramsObjectFromUrlPart(pathSplit[i]) };
    }

    return params;
}

function getRoutePath(route: StoredRoute, params: RouteParams = {}) {
    return route.parts.map(part => part.paramsObjectToUrlPart(params)).join('/');
}

function addRoute(routeDef: RouteDefinition) {
    const { path, defaultParams } = routeDef;
    const parts = path.split('/').filter(x => x).map(partString => {
        return {
            paramsObjectToUrlPart: (params: Record<string, string> = {}) => {
                if (partString[0] === ':') {
                    const varName = partString.substr(1);
                    return params[varName] ?? defaultParams?.[varName] ?? '';
                }
                return partString;
            },
            paramsObjectFromUrlPart: (val: string) => {
                if (partString[0] === ':') {
                    const varName = partString.substr(1);
                    return { [varName]: val ?? defaultParams?.[varName] };
                }
                return {};
            }
        };
    });

    routes.push({ ...routeDef, parts });
}

export var router = (window as any).router || addEventDispatcherTrait({
    findDefaultRoute,
    findRouteByName,
    findRouteByUrl,
    getCurrentRoute,
    getRouteUrl,
    navigate,
    addRoute
});

if (!(window as any).router) {
    window.addEventListener('hashchange', function() {
        const route = getCurrentRoute();
        const event = new CustomEvent('routeChange', { detail: route });
        router.trigger(event);
    });
    (window as any).router = router;
}

