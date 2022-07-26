import { Component, h, VNode, isValidElement } from 'preact';
import registerCustomElement from 'preact-custom-element';
import uniq from 'lodash/uniq';
import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';
import { toKebabCase, toCamelCase } from '../strings';
import { tr } from '../tr';

export * from './initialization-state';

export type Cmd<Msg>
    = Promise<Msg>
    | Msg
    | null
    | Event
    | [type: 'Focus', selector: string]
    | CombinedCmds<Msg>

export type Props = Record<string, unknown>;

export type Handler<Msg> = Msg | ((event: CustomEvent | Event) => Msg);

export interface Options<Msg> {
    [on: `on${string}`]: Handler<Msg>;

    [attr: string]: unknown;
}

export type Dispatch<Msg> = (msg: Msg) => void;

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

export function focus(selector: string): [type: 'Focus', selector: string] {
    return ['Focus', selector];
}

type OnRefChangeFunc = (ref: HTMLElement, oldRef?: HTMLElement) => void;

export function component<State, Msg>({
    init,
    update,
    view,
    attributeChangeFactory,
    debug = (window as any).debug,
    tagName,
    propTypes = {},
    shadow = false,
    willMount,
    willUnmount
}: {
    init: (dispatch: Dispatch<Msg>, func: (onRefChange: OnRefChangeFunc) => void) => [State, Cmd<Msg>],
    update: (state: State, msg: Msg) => [State, Cmd<Msg>],
    view: (state: State, children?: any) => View<Msg>,
    attributeChangeFactory?: (name: string, value: string) => Msg,
    debug?: boolean,
    tagName: string,
    propTypes?: Record<string, BasicTypeConstructor>,
    shadow?: boolean,
    willMount?: (cmp: any, dispatch: Dispatch<Msg>) => void,
    willUnmount?: (cmp: any, dispatch: Dispatch<Msg>) => void
}): void {
    const alreadyRegistered = !!customElements.get(tagName);

    const log = debug
        ? (msg: string, ...args: any[]) => {
            console.log('stm:' + tagName + ': ' + msg, ...args);
        }
        : () => { };

    if (alreadyRegistered) {
        log(`custom element "${tagName}" is already registered`);
        return;
    }

    function setState(cmp: any, s: State) {
        cmp.swState = s;
        cmp.setState({ states: [s] });
    }

    function getState(cmp: any) {
        return cmp.swState;
    }

    function runUpdate(cmp: Cmp, msg: Msg) {
        log('-------NEW MSG', msg);
        log('before update', getState(cmp));
        const updateResult = update(cloneDeep(getState(cmp)), msg);
        if (updateResult === undefined) {
            throw new Error('update should cover all cases');
        }
        const [newState, next] = updateResult;
        log('after update', newState);
        setState(cmp, newState);
        if (next !== null) {
            runNext(cmp, next);
        }
    }

    function runNext(cmp: Cmp, next: any) {
        if (next instanceof CombinedCmds) {
            next.cmds.forEach(cmd => runNext(cmp, cmd));
            return;
        }

        if (next && next[0] === 'Focus') {
            function tryFocus(tries: number) {
                requestAnimationFrame(() => {
                    const node = cmp.ref.querySelector(next[1]);
                    if (node) {
                        node.focus();
                    } else if (tries > 0) {
                        tryFocus(tries - 1);
                    }
                });
            }

            tryFocus(100);
            return;
        }
        if (next instanceof Event) {
            log('DISPATCH', next);

            if (shadow) {
                cmp.ref.getRootNode().host.dispatchEvent(next);
            } else {
                cmp.ref.dispatchEvent(next);
            }

            return;
        }
        Promise.resolve(next)
            .then(maybeMsg => {
                if (maybeMsg !== null) {
                    runUpdate(cmp, maybeMsg);
                }
            })
            .catch(err => {
                console.error(err);
                throw new Error('update promise should never throw');
            });
    }

    const dispatcher = (cmp: Cmp, msgFactory: any) => {
        return async function(event: Event) {
            const msg = getOrCall(msgFactory, event);
            if (msg) {
                runUpdate(cmp, msg);
            }
        };
    };

    class Cmp extends Component {

        public ref: any;
        public initialRenderComplete: boolean;
        public realProps: Record<string, any>;
        private onRefChange?: (ref: HTMLElement, oldRef?: HTMLElement) => void;

        constructor() {
            super();
            this.redraw = this.redraw.bind(this);
            this.setRef = this.setRef.bind(this);

            const [state, next] = init(msg => runUpdate(this, msg), func => this.onRefChange = func);
            log('INIT complete', state);
            setState(this, state);
            runNext(this, next);
            this.initialRenderComplete = false;
            this.realProps = {};

        }

        shouldComponentUpdate(nextProps: any): any {
            if (!attributeChangeFactory) {
                return true;
            }
            const allPropNames = uniq(Object.keys(this.realProps).concat(Object.keys(nextProps)).map(toCamelCase));

            allPropNames.forEach((propName) => {
                if (propName === 'children') {
                    if (this.realProps['children'] !== nextProps['children']) {
                        this.realProps[propName] = nextProps[propName];
                        runUpdate(this, attributeChangeFactory(propName, nextProps[propName]));
                    }
                    return;
                }

                if (!myIsEqual(this.realProps[propName], nextProps[propName]) && nextProps[propName] !== undefined) {
                    this.realProps[propName] = nextProps[propName];
                    runUpdate(this, attributeChangeFactory(propName, nextProps[propName]));
                }
            });
        }

        render(props: any) {
            if (!this.initialRenderComplete && attributeChangeFactory) {
                this.initialRenderComplete = true;
                Object.keys(props).forEach(propName => {
                    this.realProps[toCamelCase(propName)] = props[propName];
                    runUpdate(this, attributeChangeFactory(toCamelCase(propName), props[propName]));
                });
            }
            const state = getState(this);
            let vnode: any = view(state, props.children);
            if (!isValidElement(vnode)) {
                vnode = toVNode(vnode, dispatcher);
            }
            const rendered = initVNode(vnode, dispatcher.bind(null, this)) as any;
            if (typeof rendered !== 'string' && (typeof rendered.type === 'string' || !shadow)) {
                rendered.ref = this.setRef;
            } else if (typeof rendered.type !== 'string' && rendered.props.children.length > 0) {
                rendered.props.children[0].ref = this.setRef;
            }
            return rendered;
        }

        setRef(ref: any) {
            const old = this.ref;
            if (shadow || !ref) {
                this.ref = ref;
            } else {
                this.ref = ref.parentNode;
            }
            if (this.onRefChange) {
                this.onRefChange(this.ref, old);
            }
        }

        redraw() {
            this.forceUpdate();
        }

        componentWillMount() {
            tr.addEventListener('setlang', this.redraw);
            if (willMount) {
                willMount.call(this, this, msg => runUpdate(this, msg));
            }
        }

        componentWillUnmount() {
            tr.removeEventListener('setlang', this.redraw);
            if (willUnmount) {
                willUnmount.call(this, this, msg => runUpdate(this, msg));
            }
        }
    }

    const attrs = uniq(Object.keys(propTypes).map(toKebabCase).concat(Object.keys(propTypes)));
    registerCustomElement(Cmp, tagName, attrs, { shadow });
}

function getOrCall(item: any, ...args: any[]) {
    if (typeof item === 'function') {
        return item(...args);
    } else {
        return item;
    }
}

function initVNode(vnode: VNode | string, dispatcher: any): VNode | string {
    if (typeof vnode === 'string' || typeof vnode === 'boolean') {
        return vnode;
    }

    Object.keys(vnode.props || {}).forEach(key => {
        if (key.slice(0, 2) === 'on') {
            (vnode as any).props[key] = dispatcher((vnode as any).props[key]);
        }
    });

    if (Array.isArray(vnode?.props?.children)) {
        vnode.props.children.forEach(child => {
            initVNode(child as VNode, dispatcher);
        });
    } else if (vnode?.props?.children) {
        initVNode(vnode.props.children as VNode, dispatcher);
    }

    return vnode;
}

function toVNode(item: any, dispatcher: any) {
    const el = item[0];
    let opts = item[1];
    let content = item[2];

    if (!content) {
        if (Array.isArray(opts)) {
            content = opts;
            opts = {};
        } else if (opts instanceof Object) {
            content = [];
        } else {
            content = opts;
            opts = {};
        }
    }
    const { nodeName, id, classes } = parseElement(el);

    if (id) {
        opts.id = opts.id ?? id;
    }

    if (classes && classes.length > 0) {
        const allClasses = classes.concat((opts.className ?? '').split(' ').filter((x: any) => x));
        opts.className = allClasses.join(' ');
    }

    if (Array.isArray(content)) {
        content = content
            .filter(item => item)
            .map(child => {
                if (Array.isArray(child)) {
                    return toVNode(child, dispatcher);
                }
                // it's already a VNode
                return initVNode(child, dispatcher);
            });
    }

    return h(nodeName, opts, content);
}

function parseElement(el: string) {
    const nodeName = el.split('.')[0] || 'div';
    const { classes, id } = el
        .split(/(#[a-zA-Z0-9\-_]+)|(\.[a-zA-Z0-9\-_]*)/g) // split into "#abc" and ".abc" parts
        .filter((x: any) => x)
        .reduce((acc: { classes: string[], id: string }, item: string) => {
            if (item[0] === '#') {
                acc.id = item.slice(1);
            } else if (item[0] === '.') {
                acc.classes.push(item.slice(1));
            }
            return acc;
        }, { classes: [], id: '' });

    return {
        nodeName,
        id,
        classes
    };
}

function myIsEqual(a: any, b: any): boolean {
    const aType = getType(a);
    const bType = getType(b);

    if (aType !== bType) {
        return false;
    }

    if (aType === 'object') {
        const sameKeys = isEqual(Object.keys(a), Object.keys(b));

        if (!sameKeys) {
            return false;
        }
        return Object.keys(a).every((key: string) => myIsEqual(a[key], b[key]));
    }

    if (aType === 'function') {
        return aType?.toString() === bType?.toString();
    }

    return isEqual(a, b);
}

function getType(x: any) {
    if (['string', 'number', 'boolean', 'undefined', 'function'].includes(typeof x)) {
        return typeof x;
    }
    if (Array.isArray(x)) {
        return 'array';
    }
    if (x === null) {
        return 'null';
    }
    if (x instanceof Object) {
        return 'object';
    }
}

export class CombinedCmds<Msg> {
    constructor(public cmds: Cmd<Msg>[]) { }
}
