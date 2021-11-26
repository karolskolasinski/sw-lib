const routes = window.routes = window.routes ?? [];

function routeMatchUrl(route, url) {
    const testParts = url.split('/').filter(x => x);

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

export function findDefaultRoute(x) {
    const defaultRoute = routes.find(r => r.isDefault);

    if (!defaultRoute) {
        throw new Error('no default route specified ');
    }

    defaultRoute.params = getRouteParams(defaultRoute);
    return defaultRoute;
}

export function findRouteByName(routeName) {
    const route = routes.find(r => r.name === routeName)
          ?? findDefaultRoute();

    route.params = getRouteParams(route);
    return route;
}

export function findRouteByUrl(url) {
    url = (url ?? '').split('#')[1] ?? '';
    const route = routes.find(route => routeMatchUrl(route, url))
          ?? findDefaultRoute();

    route.params = getRouteParams(route);
    return route;
}

export function getCurrentRoute() {
    return findRouteByUrl(window.location.href);
}

export function getRouteUrl(routeName, params) {
    const route = findRouteByName(routeName);
    return window.location.pathname + '#' + getRoutePath(route, params);
}

function getRouteParams(route) {
    const pathSplit = window.location.hash.slice(1).split('/');
    let params = {};

    for (let i = 0; i < route.parts.length; i += 1) {
        const part = route.parts[i];
        params = { ...params, ...part.paramsObjectFromUrlPart(pathSplit[i]) };
    }

    return params;
}

function getRoutePath(route, params) {
    return route.parts.map(part => part.paramsObjectToUrlPart(params)).join('/');
}

export function addRoute({ name, path, isDefault, defaultParams }) {
    const parts = path.split('/').filter(x => x).map(partString => {
        return {
            paramsObjectToUrlPart: (params = {}) => {
                if (partString[0] === ':') {
                    const varName = partString.substr(1);
                    return params[varName] ?? defaultParams?.[varName] ?? '';
                }
                return partString;
            },
            paramsObjectFromUrlPart: val => {
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

const eventListeners = {};

export function addEventListener(eventType, listener) {
    eventListeners[eventType] = eventListeners[eventType] ?? [];
    eventListeners[eventType].push(listener);
}

export function removeEventListener(eventType, listener) {
    eventListeners[eventType] = eventListeners[eventType] ?? [];
    eventListeners[eventType] = (eventListeners[eventType] ?? []).filter(l => l !== listener);
}

function trigger(event) {
    (eventListeners[event.type] ?? []).forEach(listener => listener(event));
}

window.addEventListener('hashchange', () => {
    const route = getCurrentRoute();
    const event = new CustomEvent('routeChange', { detail: route });
    trigger(event);
});
