import * as stateMgr from '../../utils/state-mgr/state-mgr.js';
import tr from '../../utils/tr.js';
import * as router from '../../utils/router/router.js';
import { InitializationState } from './initialization-state';
import style from './sw-pagination.style.css';

tr.addTranslation('previousPage', { en: '< Previous page', pl: '< Poprzednia strona' });
tr.addTranslation('nextPage', { en: 'Next page >', pl: 'Następna strona >' });
tr.addTranslation('of', { en: 'of', pl: 'z' });

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

type Msg = AttributeChange;

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
                let numberOfPagesValue = Number.parseInt(state?.values?.numberOfPages);
                numberOfPagesValue = isNaN(numberOfPagesValue) ? 1 : numberOfPagesValue;

                const newState = {
                    ...state,
                    currentPage: Number.parseInt(state?.values?.currentPage),
                    numberOfPages: numberOfPagesValue
                };

                return [newState, null];
            } else {
                return [state, null];
            }
        } else {
            return [state, null];
        }
    }

    if (state instanceof InitializationState) {
        console.error('impossible state');
        return [state, null];
    }
}

function view(state: State): stateMgr.View<Msg> {
    if (state instanceof InitializationState) {
        return ['sw-loader'];
    }


    return ['.wrapper', [
        ['style', style],
        state.currentPage > 1 && generateTheATag(state, state.currentPage - 1, tr('previousPage'), 'previous'),


        state.numberOfPages > 1 && state.currentPage !== 1 && generateTheATag(state, 1, '1', null),


        (state.numberOfPages > 7 && state.currentPage > 4) || (state.numberOfPages === 7 && state.currentPage > 5)
        && ['span', { class: 'caption' }, '...'],


        state.currentPage - 4 > 0 && state.currentPage + 1 > state.numberOfPages && state.currentPage !== 5
        && generateTheATag(state, state, state.currentPage - 4, state.currentPage - 4),

        state.currentPage - 3 > 0 && state.currentPage + 2 > state.numberOfPages && state.currentPage !== 4
        && generateTheATag(state, state.currentPage - 3, state.currentPage - 3, null),

        state.currentPage - 2 > 0 && state.currentPage !== 3
        && generateTheATag(state, state.currentPage - 2, state.currentPage - 2, null),

        state.currentPage - 1 > 0 && state.currentPage !== 2
        && generateTheATag(state, state.currentPage - 1, state.currentPage - 1, null),


        ['span', { class: 'currentPage' }, state.currentPage],


        state.currentPage + 1 <= state.numberOfPages
        && generateTheATag(state, state.currentPage + 1, state.currentPage + 1, null),

        state.currentPage + 2 <= state.numberOfPages
        && generateTheATag(state, state.currentPage + 2, state.currentPage + 2, null),

        state.currentPage + 3 <= state.numberOfPages && state.currentPage - 4 < 4 && state.currentPage < 4
        && generateTheATag(state, state.currentPage + 3, state.currentPage + 3, null),

        state.currentPage + 4 <= state.numberOfPages && state.currentPage - 4 < 4 && state.currentPage < 3
        && generateTheATag(state, state.currentPage + 4, state.currentPage + 4, null),


        ['span', { class: 'caption' }, tr('of')],
        ['span', { class: 'caption' }, state.numberOfPages],


        state.numberOfPages > 1 && state.numberOfPages - state.currentPage !== 0
        && generateTheATag(state, state.currentPage + 1, tr('nextPage'), 'next')
    ]];
}

function pageChange(page) {
    this.ref.getRootNode().host.dispatchEvent(new CustomEvent('update', {
        detail: { page },
        bubbles: true,
    }));
}

function generateTheATag(state, page, innerText, className) {
    return ['a', {
        href: router.getRouteUrl(state.routeName, { page }),
        class: className && className,
        onclick: () => pageChange(page)
    }, innerText]
}


