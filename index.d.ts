export namespace router {

    export interface Route {
        name: string;
        params: Record<string, string>;
        isDefault: boolean;
    }

    export function findDefaultRoute(): Route;
    export function findRouteByName(routeName: string): Route;
    export function findRouteByUrl(url: string): Route;
    export function getCurrentRoute(): Route;
    export function getRouteUrl(routeName: string, params?: Record<string, string | number>): string;
    export function addRoute(initRoute: {
        name: string,
        path: string;
        isDefault?: string,
        defaultParams?: Record<string, string | number>
    }): void;
    export function addEventListener(eventType: string, listener: (event: Event) => void): void;
    export function removeEventListener(eventType: string, listenr: (event: Event) => void): void;
}
