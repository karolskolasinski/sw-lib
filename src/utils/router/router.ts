const routes = (window as any).routes = (window as any).routes ?? [];

interface RoutePart {
    paramsObjectFromUrlPart(urlPart: string): Record<string, string>;
    paramsObjectToUrlPart(obj: Record<string, string | number | boolean>): string;
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
    defaultParams?: Record<string, string | number | boolean>
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

export function findDefaultRoute() {
    const defaultRoute = routes.find((r: StoredRoute) => r.isDefault);

    if (!defaultRoute) {
        throw new Error('no default route specified ');
    }

    defaultRoute.params = getRouteParams(defaultRoute);
    return defaultRoute;
}

export function findRouteByName(routeName: string) {
    const route = routes.find((r: StoredRoute) => r.name === routeName)
        ?? findDefaultRoute();

    route.params = getRouteParams(route);
    return route;
}

export function findRouteByUrl(url: string) {
    url = (url ?? '').split('#')[1] ?? '';
    const route = routes.find((route: StoredRoute) => routeMatchUrl(route, url))
        ?? findDefaultRoute();

    route.params = getRouteParams(route);
    return route;
}

export function getCurrentRoute() {
    return findRouteByUrl(window.location.href);
}

export function getRouteUrl(routeName: string, params: Record<string, string | number | boolean>) {
    const route = findRouteByName(routeName);
    return window.location.pathname + '#' + getRoutePath(route, params);
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

function getRoutePath(route: StoredRoute, params: Record<string, string | number | boolean>) {
    return route.parts.map(part => part.paramsObjectToUrlPart(params)).join('/');
}

export function addRoute({ name, path, isDefault, defaultParams }: RouteDefinition) {
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

    routes.push({ name, parts, isDefault });
}

type Listener = (event: Event) => void;
const eventListeners: Record<string, Listener[]> = {};

export function addEventListener(eventType: string, listener: Listener) {
    eventListeners[eventType] = eventListeners[eventType] ?? [];
    eventListeners[eventType].push(listener);
}

export function removeEventListener(eventType: string, listener: Listener) {
    eventListeners[eventType] = eventListeners[eventType] ?? [];
    eventListeners[eventType] = (eventListeners[eventType] ?? []).filter(l => l !== listener);
}

function trigger(event: Event) {
    (eventListeners[event.type] ?? []).forEach(listener => listener(event));
}

window.addEventListener('hashchange', () => {
    const route = getCurrentRoute();
    const event = new CustomEvent('routeChange', { detail: route });
    trigger(event);
});
