import * as stateMgr from '../../utils/state-mgr/state-mgr.js';
import tr from '../../utils/tr.js';
import * as router from '../../utils/router/router.js';
import { InitializationState } from '../../utils/state-mgr/initialization-state';
// @ts-ignore
import style from './sw-pagination.style.css';


interface NormalState {
    currentPage: Number,
    numberOfPages: Number,
    routeName: String,
}

type State = InitializationState | NormalState;

class AttributeChange {
    constructor(public name: string, public value: any) {
    }
}

class Update {
    constructor(public page: number) {
    }
}

type Msg = AttributeChange | Update;

const propTypes = {
    currentPage: Number,
    numberOfPages: Number,
    routeName: String,
};

stateMgr.component({
    tagName: 'sw-pagination',
    init,
    update,
    view,
    AttributeChange,
    propTypes
});

function init(): [State, stateMgr.Cmd<Msg>] {
    return [new InitializationState(Object.keys(propTypes)), null];
}

function update(state: State, msg: Msg): [State, stateMgr.Cmd<Msg>] | undefined {
    if (msg instanceof AttributeChange) {
        if (state instanceof InitializationState) {
            state.setValue(msg.name, msg.value);

            if (state.isInitialized()) {
                let numberOfPagesValue = Number.parseInt(state?.getValue('numberOfPages'));
                numberOfPagesValue = isNaN(numberOfPagesValue) ? 1 : numberOfPagesValue;

                const newState = {
                    currentPage: Number.parseInt(state?.getValue('currentPage')),
                    numberOfPages: numberOfPagesValue,
                    routeName: state.getValue('routeName')
                };

                return [newState, null];
            } else {
                return [state, null];
            }
        } else {
            let newState = {...state};

            switch (msg.name) {
                case 'numberOfPages':
                    newState.numberOfPages = isNaN(msg?.value) ? 1 : msg?.value;
                    break;
                case 'currentPage':
                    newState.currentPage = isNaN(msg?.value) ? 1 : msg?.value;
                    break;
                case 'routeName':
                    newState.routeName = msg?.value;
                    break;
            }

            return [newState, null];
        }
    }

    if (state instanceof InitializationState) {
        console.error('impossible state');
        return [state, null];
    }

    if (msg instanceof Update) {
        return [state, new CustomEvent('update', {
            bubbles: true,
            detail: {page: msg.page},
        })];
    }
}

function view(state: State): stateMgr.View<Msg> {
    if (state instanceof InitializationState) {
        return ['sw-loader'];
    }


    return ['.wrapper', [
        ['style', style],
        state.currentPage > 1 && generateTheATag(state, state.currentPage - 1, tr('pagination.previousPage'), 'previous'),


        state.numberOfPages > 1 && state.currentPage !== 1 && generateTheATag(state, 1, '1', null),


        (state.numberOfPages > 7 && state.currentPage > 4) || (state.numberOfPages === 7 && state.currentPage > 5)
        && ['span.caption', '...'],


        state.currentPage - 4 > 0 && state.currentPage + 1 > state.numberOfPages && state.currentPage !== 5
        && generateTheATag(state, state, state.currentPage - 4, state.currentPage - 4),

        state.currentPage - 3 > 0 && state.currentPage + 2 > state.numberOfPages && state.currentPage !== 4
        && generateTheATag(state, state.currentPage - 3, state.currentPage - 3, null),

        state.currentPage - 2 > 0 && state.currentPage !== 3
        && generateTheATag(state, state.currentPage - 2, state.currentPage - 2, null),

        state.currentPage - 1 > 0 && state.currentPage !== 2
        && generateTheATag(state, state.currentPage - 1, state.currentPage - 1, null),


        ['span.currentPage', state.currentPage],


        state.currentPage + 1 <= state.numberOfPages
        && generateTheATag(state, state.currentPage + 1, state.currentPage + 1, null),

        state.currentPage + 2 <= state.numberOfPages
        && generateTheATag(state, state.currentPage + 2, state.currentPage + 2, null),

        state.currentPage + 3 <= state.numberOfPages && state.currentPage - 4 < 4 && state.currentPage < 4
        && generateTheATag(state, state.currentPage + 3, state.currentPage + 3, null),

        state.currentPage + 4 <= state.numberOfPages && state.currentPage - 4 < 4 && state.currentPage < 3
        && generateTheATag(state, state.currentPage + 4, state.currentPage + 4, null),


        ['span.caption', tr('pagination.of')],
        ['span.caption', state.numberOfPages],


        state.numberOfPages > 1 && state.numberOfPages - state.currentPage !== 0
        && generateTheATag(state, state.currentPage + 1, tr('pagination.nextPage'), 'next')
    ]];
}

function generateTheATag(state, page, innerText, className) {
    return ['a', {
        href: router.getRouteUrl(state.routeName, {page}),
        className: className && className,
        onclick: new Update(page)
    }, innerText];
}


