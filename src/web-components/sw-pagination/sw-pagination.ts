import * as stateMgr from '../../utils/state-mgr/state-mgr';
import tr from '../../utils/tr';
import * as router from '../../utils/router/router';
// @ts-ignore
import style from './sw-pagination.style.css';


interface NormalState {
    currentPage: number,
    numberOfPages: number,
    routeName: string,
}

type State = stateMgr.InitializationState | NormalState;

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
    propTypes,
});

function init(): [State, stateMgr.Cmd<Msg>] {
    return [new stateMgr.InitializationState(Object.keys(propTypes)), null];
}

function update(state: State, msg: Msg): [State, stateMgr.Cmd<Msg>] | undefined {
    if (state instanceof stateMgr.InitializationState) {
        state.setValue(msg.name, msg.value);

        if (state.isInitialized()) {
            let numberOfPagesValue = parseInt(state?.getValue('numberOfPages'));
            numberOfPagesValue = isNaN(numberOfPagesValue) ? 1 : numberOfPagesValue;

            const newState = {
                currentPage: parseInt(state?.getValue('currentPage')),
                numberOfPages: numberOfPagesValue,
                routeName: state.getValue('routeName')
            };

            return [newState, null];
        } else {
            return [state, null];
        }
    } else {
        let newState = { ...state };

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

function view(state: State): stateMgr.View<Msg> {
    if (state instanceof stateMgr.InitializationState) {
        return ['sw-loader'];
    }

    return ['.wrapper', [
        ['style', style],
        state.currentPage > 1 && pageView(state, state.currentPage - 1, tr('pagination.previousPage'), 'previous'),


        state.numberOfPages > 1 && state.currentPage !== 1 && pageView(state, 1, '1'),


        ((state.numberOfPages >= 7 && state.currentPage > 4) || (state.numberOfPages === 7 && state.currentPage > 5))
        && ['span.caption', '...'],


        state.currentPage - 4 > 0 && state.currentPage + 1 > state.numberOfPages && state.currentPage !== 5
        && pageView(state, state.currentPage - 4, (state.currentPage - 4).toString()),

        state.currentPage - 3 > 0 && state.currentPage + 2 > state.numberOfPages && state.currentPage !== 4
        && pageView(state, state.currentPage - 3, (state.currentPage - 3).toString()),

        state.currentPage - 2 > 0 && state.currentPage !== 3
        && pageView(state, state.currentPage - 2, (state.currentPage - 2).toString()),

        state.currentPage - 1 > 0 && state.currentPage !== 2
        && pageView(state, state.currentPage - 1, (state.currentPage - 1).toString()),


        ['span.currentPage', state.currentPage],


        state.currentPage + 1 <= state.numberOfPages
        && pageView(state, state.currentPage + 1, (state.currentPage + 1).toString()),

        state.currentPage + 2 <= state.numberOfPages
        && pageView(state, state.currentPage + 2, (state.currentPage + 2).toString()),

        state.currentPage + 3 <= state.numberOfPages && state.currentPage - 4 < 4 && state.currentPage < 4
        && pageView(state, state.currentPage + 3, (state.currentPage + 3).toString()),

        state.currentPage + 4 <= state.numberOfPages && state.currentPage - 4 < 4 && state.currentPage < 3
        && pageView(state, state.currentPage + 4, (state.currentPage + 4).toString()),


        ['span.caption', tr('pagination.of')],
        ['span.caption', state.numberOfPages],


        state.numberOfPages > 1 && state.numberOfPages - state.currentPage !== 0
        && pageView(state, state.currentPage + 1, tr('pagination.nextPage'), 'next')
    ]];
}

function pageView(state: NormalState, page: number, innerText: string = '', className: string = '') {
    return ['a', {
        href: router.getRouteUrl(state.routeName, { page }),
        className: className && className
    }, innerText];
}


