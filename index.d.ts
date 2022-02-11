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

interface Translate extends EventDispatcher {
    (
        phrase: string | Record<string, string>,
        langOrParams?: string | Record<string, string | number> | (string | number)[],
        lang?: string
    ): string;
    getBrowserLang(): string;
    getBrowserLocale(): string;
    setLang(lang: string): void;
    getLang(): string;
    /**
     * tip: for 'en_US' the locale is 'US'
     */
    setLocale(locale: string): void;
    getLocale(): string;
    addTranslation(phrase: string, translation: Record<string, string>): void;
}

export const tr: Translate;

export interface EventDispatcher {
    addEventListener(eventType: string, listener: (event: Event) => void): void;
    removeEventListener(eventType: string, listenr: (event: Event) => void): void;
    dispatchEvent(event: Event): void;

    on(eventType: string, listener: (event: Event) => void): void;
    off(eventType: string, listenr: (event: Event) => void): void;
    trigger(event: Event): void;
}


export interface Route {
    name: string;
    params: Record<string, string>;
    isDefault: boolean;
    [param: string]: unknown;
}

export interface Router extends EventDispatcher {
    findDefaultRoute(): Route;
    findRouteByName(routeName: string): Route;
    findRouteByUrl(url: string): Route;
    getCurrentRoute(): Route;
    getRouteUrl(routeName: string, params?: RouteParams): string;
    navigate(routeName: string, params?: RouteParams): void;
    addRoute(initRoute: {
        name: string,
        path: string;
        isDefault?: string,
        defaultParams?: Record<string, string | number>
    }): void;
}

export type RouteParams = Record<string, string | number | boolean>;

export var router: Router;

export type Handler<Msg> = Msg | ((event: CustomEvent & Event) => Msg);

export interface Options<Msg> {
    [on: `on${string}`]: Handler<Msg>;
    [attr: string]: unknown
}

export type ContentChild<Msg> = v.View<Msg> | string | false | ContentChild<Msg>[];

export interface V {
    <Msg>(
        tagName: string,
        opts?: Options<Msg> | ContentChild<Msg>,
        ...content: ContentChild<Msg>[]
    ): v.View<Msg>

    [key: string]: <Msg>(
        opts?: Options<Msg> | ContentChild<Msg>,
        ...content: ContentChild<Msg>[]
    ) => v.View<Msg>;
}

export var v: V;

export namespace v {
    export type View<Msg> = VNode<Options<Msg>>;
}

export namespace stm {

    export type Cmd<Msg>
        = Promise<Msg>
        | Msg
        | null
        | Event
        | ReturnType<typeof focus>

    export type Props = Record<string, unknown>;

    export type Dispatch<Msg> = (msg: Msg) => void;

    export class InitializationState {
        constructor(props: string[]);
        isInitialized(): this is Required<InitializationState>;
        setValue(propName: string, propValue: any): void;
        getValue(propName: string): any;
        getValues(): Record<string, any>;
    }

    export type View<Msg>
        = [string, Options<Msg>, View<Msg>[] | string]
        | [string, View<Msg>[] | Options<Msg> | string]
        | [string]
        | false
        | string
        | VNode<Options<Msg>>;

    type BasicTypeConstructor
        = (new () => String)
        | (new () => Number)
        | (new () => Object)
        | (new () => Array<any>)
        | (new () => Boolean);

    export function focus(selector: string): [type: 'Focus', selector: string];

    type OnRefChangeFunc = (ref: HTMLElement, oldRef?: HTMLElement) => void;

    export function component<State, Msg>({
        init,
        update,
        view,
        attributeChangeFactory,
        debug,
        tagName,
        propTypes,
        shadow,
        willMount,
        willUnmount
    }: {
        init: (dispatch: Dispatch<Msg>, func: (onRefChange: OnRefChangeFunc) => void) => [State, Cmd<Msg>],
        update: (state: State, msg: Msg) => [State, Cmd<Msg>] | void,
        view: (state: State, children?: any) => View<Msg>,
        attributeChangeFactory?: (name: string, value: string) => Msg,
        debug?: boolean,
        tagName: string,
        propTypes?: Record<string, BasicTypeConstructor>,
        shadow?: boolean,
        willMount?: (cmp: any, dispatch: Dispatch<Msg>) => void,
        willUnmount?: (cmp: any, dispatch: Dispatch<Msg>) => void,
    }): void;
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

export interface ModalConfirmOptions {
    title?: ModalPart;
    text: ModalPart;
    okLabel?: string;
    cancelLabel?: string;
}

export function modalConfirm(opts: ModalConfirmOptions): Promise<boolean>;

export interface ModalAlertOptions {
    title?: ModalPart;
    text: ModalPart;
    buttonLabel: string;
}

export function modalAlert(opts: ModalAlertOptions): Promise<boolean>;

export interface ModalPromptOptions {
    title?: ModalPart;
    text: ModalPart;
    placeholder: string;
    initialValue?: string;
}

export function modalPrompt(opts: ModalPromptOptions): Promise<string>;
