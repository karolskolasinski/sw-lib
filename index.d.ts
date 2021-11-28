import { VNode } from 'preact';

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

export namespace stateMgr {

    export type Cmd<Msg> = Promise<Msg> | Msg | null | Event;

    export type Props = Record<string, unknown>;

    export type Options<Msg> = Record<string, any | Msg | ((...args: any[]) => Msg)>;

    export type Dispatcher = (msg: any) => (event: Event) => Promise<void>;

    interface PropChange<Msg> {
        new(propName: string, propValue: unknown): Msg
    }

    export type View<Msg>
        = [string, Options<Msg>, View<Msg>[] | string]
        | [string, View<Msg>[] | Options<Msg> | string]
        | [string]
        | { mapFunc: any, view: View<Msg> }

    export function component<State, Msg>({
        init,
        update,
        view,
        PropChange
    }: {
        init: (dispatcher: Dispatcher) => [State, Cmd<Msg>],
        update: (state: State, msg: Msg) => [State, Cmd<Msg>] | void,
        view: (state: State) => View<Msg>,
        PropChange?: PropChange<Msg>
    }): (props: Props) => VNode<any>;

    export function mapMsg<T, P>(mapFunc: (msg: T) => P, view: View<T>): View<P>;

    export function unmapMsg<T, W>(msgPromise: Promise<T> | T | null, Wrapper: W): Promise<W>;
}

