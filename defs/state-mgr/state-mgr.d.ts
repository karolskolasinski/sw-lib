import { VNode } from 'preact';
export * from './initialization-state';
export declare type Cmd<Msg> = Promise<Msg> | Msg | null | Event | [type: 'Focus', selector: string] | CombinedCmds<Msg>;
export declare type Props = Record<string, unknown>;
export declare type Handler<Msg> = Msg | ((event: CustomEvent | Event) => Msg);
export interface Options<Msg> {
    [on: `on${string}`]: Handler<Msg>;
    [attr: string]: unknown;
}
export declare type Dispatch<Msg> = (msg: Msg) => void;
export declare type View<Msg> = [string, Options<Msg>, View<Msg>[] | string] | [string, View<Msg>[] | Options<Msg> | string] | [string] | false | string | VNode<Options<Msg>>;
declare type BasicTypeConstructor = (new () => String) | (new () => Number) | (new () => Object) | (new () => Array<any>) | (new () => Boolean);
export declare function focus(selector: string): [type: 'Focus', selector: string];
declare type OnRefChangeFunc = (ref: HTMLElement, oldRef?: HTMLElement) => void;
export declare function component<State, Msg>({ init, update, view, attributeChangeFactory, debug, tagName, propTypes, shadow, willMount, willUnmount }: {
    init: (dispatch: Dispatch<Msg>, func: (onRefChange: OnRefChangeFunc) => void) => [State, Cmd<Msg>];
    update: (state: State, msg: Msg, cmp: any, dispatch: Dispatch<Msg>) => [State, Cmd<Msg>];
    view: (state: State, children?: any) => View<Msg>;
    attributeChangeFactory?: (name: string, value: string) => Msg;
    debug?: boolean;
    tagName: string;
    propTypes?: Record<string, BasicTypeConstructor>;
    shadow?: boolean;
    willMount?: (cmp: any, dispatch: Dispatch<Msg>) => void;
    willUnmount?: (cmp: any, dispatch: Dispatch<Msg>) => void;
}): void;
export declare class CombinedCmds<Msg> {
    cmds: Cmd<Msg>[];
    constructor(cmds: Cmd<Msg>[]);
}
