import { Component, h } from 'preact';
import registerCustomElement from 'preact-custom-element';
import _ from 'lodash';
import { toKebabCase, toCamelCase } from '../strings';

export * from './initialization-state';

export type Cmd<Msg> = Promise<Msg> | Msg | null | Event;

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

export class Focus {
    constructor(
        public selector: string
    ) { }
}

export function component<State, Msg>({
    init,
    update,
    view,
    AttributeChange,
    debug = false,
    tagName,
    propTypes = {},
    shadow = false,
    willMount,
    willUnmount
}: {
    init: (dispatch: Dispatch<Msg>) => [State, Cmd<Msg>],
    update: (state: State, msg: Msg) => [State, Cmd<Msg>] | void,
    view: (state: State) => View<Msg>,
    AttributeChange?: AttributeChange<Msg>,
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
            console.log('stateMgr:' + tagName + ': ' + msg, ...args);
        }
        : () => { }

    if (alreadyRegistered) {
        log(`custom element "${tagName}" is already registerd`);
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
        // TODO, to optimize remove requestAnimationFrame
        requestAnimationFrame(() => {
            log('-------NEW MSG', msg);
            log('before update', getState(cmp));
            const updateResult = update(getState(cmp), msg);
            if (updateResult === undefined) {
                throw new Error('update should cover all cases');
            }
            const [newState, next] = updateResult;
            log('after update', newState);
            setState(cmp, newState);
            if (next !== null) {
                runNext(cmp, next);
            }
        });
    }

    function runNext(cmp: Cmp, next: any) {
        if (next instanceof Focus) {
            function tryFocus(tries: number) {
                requestAnimationFrame(() => {
                    const node = cmp.ref.querySelector(next.selector);
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
            runUpdate(cmp, msg);
        };
    };

    class Cmp extends Component {

        public ref: any;
        public initialRenderComplete: boolean;
        public realProps: Record<string, any>;

        constructor() {
            super();
            const [state, next] = init(msg => runUpdate(this, msg));
            log('INIT complete', state);
            setState(this, state);
            runNext(this, next);
            this.initialRenderComplete = false;
            this.realProps = {};
        }

        shouldComponentUpdate(nextProps: any): any {
            if (!AttributeChange) {
                return true;
            }
            const allPropNames = _.uniq(Object.keys(this.realProps).concat(Object.keys(nextProps)).map(toCamelCase));

            allPropNames.forEach((propName) => {
                if (!_.isEqual(this.realProps[propName], nextProps[propName]) && nextProps[propName] !== undefined) {
                    this.realProps[propName] = nextProps[propName];
                    runUpdate(this, new AttributeChange(propName, nextProps[propName]));
                }
            });
        }

        render(props: any) {
            if (!this.initialRenderComplete && AttributeChange) {
                this.initialRenderComplete = true;
                Object.keys(props).forEach(propName => {
                    this.realProps[toCamelCase(propName)] = props[propName];
                    runUpdate(this, new AttributeChange(toCamelCase(propName), props[propName]));
                });
            }
            const state = getState(this);
            const arr = view(state);
            const rendered = toVNode(arr, dispatcher.bind(null, this));
            rendered.ref = ref => this.ref = ref;
            return rendered;
        }
    }

    if (willMount) {
        Cmp.prototype.componentWillMount = function() {
            willMount.call(this, this, msg => runUpdate(this, msg));
        };
    }

    if (willUnmount) {
        Cmp.prototype.componentWillUnmount = function() {
            willUnmount.call(this, this, msg => runUpdate(this, msg));
        };
    }

    const attrs = _.uniq(Object.keys(propTypes).map(toKebabCase).concat(Object.keys(propTypes)));
    registerCustomElement(Cmp, tagName, attrs, { shadow });
}

function getOrCall(item: any, ...args: any[]) {
    if (typeof item === 'function') {
        return item(...args);
    } else {
        return item;
    }
}

function toVNode(item: any, dispatcher: any) {
    let mapFunc: any;

    if (item.mapFunc && item.view) {
        mapFunc = item.mapFunc;
        item = item.view;
    }

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

    const optsParsed: Record<string, any> = {};
    Object.keys(opts ?? {}).forEach(prop => {
        const propKebab = prop === 'className' ? 'className' : toKebabCase(prop);
        if (prop.slice(0, 2) === 'on') {
            if (mapFunc) {
                const originalPropValue = opts[prop];
                optsParsed[propKebab] = dispatcher((event: Event) => {
                    const msg = getOrCall(originalPropValue, event);
                    return mapFunc(msg);
                });
            } else {
                optsParsed[propKebab] = dispatcher(opts[prop]);
            }
        } else {
            optsParsed[propKebab] = opts[prop];
        }
    });

    if (Array.isArray(content)) {
        content = content
            .filter(item => item)
            .map(child => {
                if (mapFunc) {
                    child = { mapFunc, view: child };
                }
                if (Array.isArray(child) || (child.mapFunc && child.view)) {
                    return toVNode(child, dispatcher);
                }
                // it's already a VNode
                return child;
            });
    }

    return h(nodeName, optsParsed, content);
}

export function mapMsg<Msg>(mapFunc: any, view: View<Msg>) {
    return {
        mapFunc,
        view
    };
}

export function unmapMsg(msgPromise: any, Wrapper: any) {
    if (!msgPromise) {
        return null;
    }
    return Promise.resolve(msgPromise).then((subMsg) => new Wrapper(subMsg));
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
