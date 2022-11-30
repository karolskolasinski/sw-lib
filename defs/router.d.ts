interface EventDispatcher {
    addEventListener(eventType: string, listener: (event: Event) => void): void;
    removeEventListener(eventType: string, listenr: (event: Event) => void): void;
    dispatchEvent(event: Event): void;
    on(eventType: string, listener: (event: Event) => void): void;
    off(eventType: string, listenr: (event: Event) => void): void;
    trigger(event: Event): void;
}
interface Router extends EventDispatcher {
    findDefaultRoute(): router.Route;
    findRouteByName(routeName: string): router.Route;
    findRouteByUrl(url: string): router.Route;
    getCurrentRoute(): router.Route;
    getRouteUrl(routeName: string, params?: router.RouteParams): string;
    getRoutePath(routeName: string, params?: router.RouteParams): string;
    navigate(routeName: string, params?: router.RouteParams): void;
    addRoute(initRoute: {
        name: string;
        path: string;
        isDefault?: string;
        defaultParams?: Record<string, string | number>;
    }): void;
}
export declare var router: Router;
export declare namespace router {
    export interface Route {
        name: string;
        params: Record<string, string>;
        isDefault: boolean;
        [param: string]: unknown;
        parts: RoutePart[];
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
    export {};
}
export {};
