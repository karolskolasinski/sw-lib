import { Component, h } from 'preact';
import registerCustomElement from 'preact-custom-element';
import _ from 'lodash';
import { toKebabCase, toCamelCase } from '../strings';

export function component({
    init,
    update,
    view,
    AttributeChange,
    debug = false,
    tagName,
    porpTypes
}) {
    function setState(cmp, s) {
        cmp.swState = s;
        cmp.setState({ states: [s] });
    }

    function getState(cmp) {
        return cmp.swState;
    }

    function runUpdate(cmp, msg) {
        // TODO, to optimize remove requestAnimationFrame
        // requestAnimationFrame(() => {
        if (debug) {
            console.log('-------NEW MSG', msg);
            console.log('before update', getState(cmp));
        }
        const updateResult = update(getState(cmp), msg);
        if (updateResult === undefined) {
            throw new Error('update should cover all cases');
        }
        const [newState, next] = updateResult;
        if (debug) {
            console.log('after update', newState);
        }
        setState(cmp, newState);
        if (next !== null) {
            runNext(cmp, next);
        }
        // });
    }

    function runNext(cmp, next) {
        if (next instanceof Event || next instanceof CustomEvent) {
            const host = cmp.ref.getRootNode().host;

            if (debug) {
                console.log('DISPATCH', next);
            }

            if (!host) {
                cmp.ref.dispatchEvent(next);
            } else {
                host.dispatchEvent(next);
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

    const dispatcher = (cmp, msgFactory) => {
        return async function(event) {
            const msg = getOrCall(msgFactory, event);
            runUpdate(cmp, msg);
        };
    };

    class App extends Component {

        constructor() {
            super();
            const [state, next] = init(msg => runUpdate(this, msg));
            if (debug) {
                console.log('INIT complete', state);
            }
            setState(this, state);
            runNext(this, next);
            this.initialRenderComplete = false;
            this.realProps = {};
        }

        shouldComponentUpdate(nextProps) {
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

        render(props) {
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

    return App;
}

function getOrCall(item, ...args) {
    if (typeof item === 'function') {
        return item(...args);
    } else {
        return item;
    }
}

function toVNode(item, dispatcher) {
    let mapFunc;

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
        const allClasses = classes.concat((opts.className ?? '').split(' ').filter((x) => x));
        opts.className = allClasses.join(' ');
    }

    const optsParsed = {};
    Object.keys(opts ?? {}).forEach(prop => {
        const propKebab = prop === 'className' ? 'className' : toKebabCase(prop);
        if (prop.slice(0, 2) === 'on') {
            if (mapFunc) {
                const originalPropValue = opts[prop];
                optsParsed[propKebab] = dispatcher((event) => {
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

export function mapMsg(mapFunc, view) {
    return {
        mapFunc,
        view
    };
}

export function unmapMsg(msgPromise, Wrapper) {
    if (!msgPromise) {
        return null;
    }
    return Promise.resolve(msgPromise).then((subMsg) => new Wrapper(subMsg));
}


function parseElement(el) {
    const nodeName = el.split('.')[0] || 'div';
    const { classes, id } = el
        .split(/(#[a-zA-Z0-9\-_]+)|(\.[a-zA-Z0-9\-_]*)/g) // split into "#abc" and ".abc" parts
        .filter(x => x)
        .reduce((acc, item) => {
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
