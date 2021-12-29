import _ from 'lodash';
import { toKebabCase } from './strings';
import { h, VNode, isValidElement } from 'preact';

export type Handler<Msg> = Msg | ((event: Event) => Msg);

export interface Options<Msg> {
    [on: `on${string}`]: Handler<Msg>;
    [attr: string]: unknown
}

export type ContentChild<Msg> = VNode<Options<Msg>> | string | false | ContentChild<Msg>[];

function isContentChild<Msg>(child: any): child is ContentChild<Msg> {
    return typeof child === 'string' || isValidElement(child);
}

function view<Msg>(
    tagName: string,
    initialOpts?: Options<Msg> | ContentChild<Msg>,
    ...content: ContentChild<Msg>[]
): VNode<Options<Msg>> {
    const { nodeName, id, classes } = parseElement(tagName);
    let opts: Options<Msg> = {};

    if (isContentChild(initialOpts)) {
        content = [initialOpts, ...content];
        opts = {};
    } else if (_.isObject(initialOpts)) {
        opts = initialOpts as Options<Msg>;
    }

    if (id) {
        opts.id = opts.id ?? id;
    }

    if (classes && classes.length > 0) {
        const initial = typeof opts.className === 'string' ? opts.className : '';
        const allClasses = classes.concat(initial.split(' ').filter((x: any) => x));
        opts.className = allClasses.join(' ');
    }

    return h(toKebabCase(nodeName), opts, ...content);
}

export var v = new Proxy(view, {
    get(target, prop) {
        return function <Msg>(
            opts?: Options<Msg> | VNode<Options<Msg>>,
            ...content: VNode<Options<Msg>>[]
        ) {
            return target<Msg>(prop.toString(), opts, ...content);
        }
    }
}) as V;

interface V {
    <Msg>(
        tagName: string,
        opts?: Options<Msg> | ContentChild<Msg>,
        ...content: ContentChild<Msg>[]
    ): VNode<Options<Msg>>

    [key: string]: <Msg>(
        opts?: Options<Msg> | ContentChild<Msg>,
        ...content: ContentChild<Msg>[]
    ) => VNode<Options<Msg>>;
}

function parseElement(tagName: string) {
    const nodeName = tagName.split('.')[0] || 'div';
    const { classes, id } = tagName
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
