import { VNode } from 'preact';

export function flashMessage(msg: string, level?: 'info' | 'success' | 'warning' | 'error'): void;

export namespace strings {
    export function toSpaceCase(str: string): string;
    export function toKebabCase(str: string): string;
    export function toCamelCase(str: string): string;
    export function capitalizeFirstLetter(str: string): string;
}

export namespace dates {
    export function formatDate(timestamp: number): string;
    export function formatDateTime(timestamp: number): string;
}

interface Translate {
    (
        phrase: string | Record<string, string>,
        langOrParams?: string | Record<string, string | number> | (string | number)[],
        lang?: string
    ): string;
    getLang(): string;
    setDefaultLang(lang: string): void;
    getDefaultLang(): string;
    addTranslation(phrase: string, translation: Record<string, string>): void;
}

export const tr: Translate;

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

    export type Cmd<Msg> = Promise<Msg> | Msg | null | Event | CustomEvent;

    export type Props = Record<string, unknown>;

    export type Options<Msg> = Record<string, any | Msg | ((...args: any[]) => Msg)>;

    export type Dispatch<Msg> = (msg: Msg) => void;

    interface AttributeChange<Msg> {
        new(name: string, value: unknown): Msg
    }

    export type View<Msg>
        = [string, Options<Msg>, View<Msg>[] | string]
        | [string, View<Msg>[] | Options<Msg> | string]
        | [string]
        | { mapFunc: any, view: View<Msg> }

    type BasicTypeConstructor
        = (new () => String)
        | (new () => Number)
        | (new () => Object)
        | (new () => Array<any>)
        | (new () => Boolean);

    export function component<State, Msg>({
        init,
        update,
        view,
        AttributeChange,
        debug,
        tagName,
        propTypes,
        shadow
    }: {
        init: (dispatch: Dispatch<Msg>) => [State, Cmd<Msg>],
        update: (state: State, msg: Msg) => [State, Cmd<Msg>] | void,
        view: (state: State) => View<Msg>,
        AttributeChange?: AttributeChange<Msg>,
        debug?: boolean,
        tagName?: string,
        propTypes?: Record<string, BasicTypeConstructor>,
        shadow?: boolean
    }): void;

    export function mapMsg<T, P>(mapFunc: (msg: T) => P, view: View<T>): View<P>;

    export function unmapMsg<T, W>(msgPromise: Promise<T> | T | null, Wrapper: W): Promise<W>;
}

export interface ModalClose {
    (flag: boolean): void;
}

type ModalPart
    = string
    | ((close: ModalClose, id: number) => string)
    | ((close: ModalClose, id: number) => VNode<any>)
    | VNode<any>;

export interface ModalOptions {
    header: ModalPart;
    body: ModalPart;
    footer: ModalPart;
    large?: boolean;
}

export function modal(opts: ModalOptions): Promise<any>;
