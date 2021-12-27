import { VNode, h, isValidElement } from 'preact';

type Handler<T> = T | ((event: Event) => T);

// interface Options<T> {
//     on?: {
//         [key: string]: Handler<T>
//     };
//     [key: string]: unknown;
// }

type Option<T> = { on?: T, attrName: string, value?: unknown }

type Content<T> = VRes<T> | VRes<T>[] | string | Content<T>[];

function isOptions<T>(opts?: Option<T>[] | Content<T>): opts is Option<T>[] {
    return (opts as any)?.[0]?.attrName;
}

interface VRes<T> extends VNode {
    msg: T
}

export function v<T>(tagName: string, opts?: Option<T>[] | Content<T>, children?: Content<T>): VRes<T> {
    const parsedOptions = isOptions(opts) ? parseOptions(opts) : {};
    return h(tagName, parsedOptions, children) as VRes<T>;
}

export namespace v {
    function makeFunc(tagName: string) {
        return function tag<T>(opts?: Option<T>[] | Content<T>, children?: Content<T>) {
            return v<T>(tagName, opts, children);
        }
    }

    export var div = makeFunc('div');
    export var h1 = makeFunc('h1');
    export var h2 = makeFunc('h2');
    export var h3 = makeFunc('h3');
    export var p = makeFunc('p');
    export var a = makeFunc('a');
}

export function a<T>(attrName: string, value: unknown): Option<T> {
    return { attrName, value };
}

export namespace a {
    function makeArg(attrName: string) {
        return function arg<T>(value: unknown) {
            return a<T>(attrName, value);
        }
    }

    export var className = makeArg('className');
    export var style = makeArg('style');
    export var width = makeArg('width');
    export var height = makeArg('height');
    export var href = makeArg('href');
}

export function on<T>(callbackName: string, msg: T): Option<T> {
    return { on: msg, attrName: 'on' + callbackName };
}

export namespace on {
    function makeHandler(attrName: string) {
        return function handler<T>(value: T) {
            return on<T>(attrName, value);
        }
    }

    export var click = makeHandler('click');
    export var save = makeHandler('save');
}

function parseOptions<T>(opts: Option<T>[]): Record<string, unknown> {
    return opts.reduce((acc, item) => {
        if (item.on) {
            acc[item.attrName] = item.on;
        } else {
            acc[item.attrName] = item.value;
        }
        return acc;
    }, {} as Record<string, unknown>);
}

type Msg = 'Yes' | 'No';

function render(): VRes<Msg> {
    return v.div([on.click('Yes'), a.width('100px')], [
        v.a([a.href('/abc')], 'Hello')
    ]);
}
