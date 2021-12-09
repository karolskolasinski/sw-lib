import * as stateMgr from '../../utils/state-mgr/state-mgr';
import { flashMessage } from '../../utils/flash-message/flash-message';
import tr from '../../utils/tr';
// @ts-ignore
import style from './sw-select.css';

class AttributeChange {
    constructor(
        public name: string,
        public value: any
    ) { }
}

class OpenSelect { }
class CloseSelect { }

class KeyboardMove {
    constructor(
        public keyCode: string
    ) { }
}

class SearchRequest {
    constructor(
        public phrase: string
    ) { }
}

class DelaySearch {
    constructor(
        public phrase: string
    ) { }
}

class Pick {
    constructor(
        public option: SelectOption
    ) { }
}

class SearchSuccess {
    constructor(
        public options: SelectOption[]
    ) { }
}

class SearchFailure { }

type Msg
    = AttributeChange
    | OpenSelect
    | KeyboardMove
    | SearchRequest
    | DelaySearch
    | SearchSuccess
    | SearchFailure
    | Pick;

interface SelectOption {
    label: string;
    value: string | number;
}

interface State {
    name?: string;
    isLoading: boolean;
    phrase: string;
    showLabel?: boolean;
    selected?: SelectOption;
    minimumCharLengthTrigger: number;
    options?: SelectOption[]
    sourceFn?: (value: string) => Promise<SelectOption[]>;
    isDropdownVisible?: boolean;
    shouldDisplayAbove?: boolean;
    displayedOptions: SelectOption[];
}

function getParents(el: HTMLElement | null): HTMLElement[] {
    if (!el) {
        return [];
    }
    return [el, ...getParents(el.parentElement)];
}

stateMgr.component({
    tagName: 'sw-select',
    propTypes: {
        config: Object
    },
    debug: false,
    init,
    update,
    view,
    AttributeChange,
    willMount(cmp: any, dispatch: stateMgr.Dispatch<Msg>) {
        cmp.closeSelect = (event: MouseEvent) => {
            if (!getParents(event.target as HTMLElement).includes(cmp.ref)) {
                dispatch(new CloseSelect());
            }
        };
        document.addEventListener('click', cmp.closeSelect);
    },
    willUnmount(cmp: any) {
        document.removeEventListener('click', cmp.closeSelect);
    }
});

function init(): [State, null] {
    return [{
        minimumCharLengthTrigger: 2,
        isLoading: false,
        displayedOptions: [],
        phrase: ''
    }, null];
}

function update(state: State, msg: Msg): [State, stateMgr.Cmd<Msg>] | undefined {
    if (msg instanceof AttributeChange) {
        if (msg.name === 'config' && msg.value instanceof Object) {
            return [{
                ...msg.value,
                isDropdownVisible: false,
                shouldDisplayAbove: false,
                displayedOptions: msg.value.options ?? [],
                showLabel: msg.value.showLabel && msg.value.showLabel !== 'false'
            }, null];
        } else {
            return [state, null];
        }
    }

    if (msg instanceof OpenSelect) {
        if (state.isDropdownVisible) {
            return [state, null];
        }
        return [{ ...state, isDropdownVisible: true, isLoading: false }, new stateMgr.Focus('.input')];
    }

    if (msg instanceof CloseSelect) {
        return [{ ...state, isDropdownVisible: false, isLoading: false }, null];
    }

    if (msg instanceof KeyboardMove) {
        if (msg.keyCode === 'Escape') {
            return [{ ...state, isDropdownVisible: false }, null];
        }
        return [state, null];
    }

    if (msg instanceof SearchRequest) {
        if (msg.phrase.length >= state.minimumCharLengthTrigger) {
            if (state.sourceFn) {
                return [{ ...state, phrase: msg.phrase }, delaySearch(msg.phrase)];
            } else {
                return [{
                    ...state,
                    displayedOptions: (state.options ?? []).filter(option => option.label.includes(msg.phrase))
                }, null];
            }
        } else {
            return [{ ...state, phrase: msg.phrase }, null];
        }
    }

    if (msg instanceof DelaySearch) {
        if (msg.phrase === state.phrase) {
            return [{ ...state, isLoading: true }, search(state)]
        } else {
            return [state, null];
        }
    }

    if (msg instanceof SearchFailure) {
        0
        flashMessage(tr('select.searchFailed'), 'error');
        return [{ ...state, isLoading: false, }, null];
    }

    if (msg instanceof SearchSuccess) {
        return [{ ...state, isLoading: true, displayedOptions: msg.options }, null];
    }

    if (msg instanceof Pick) {
        return [
            { ...state, isLoading: false, isDropdownVisible: false, selected: msg.option },
            new CustomEvent('update', {
                detail: { value: msg.option },
                bubbles: true,
            })
        ];
    }
}

function delaySearch(phrase: string) {
    return new Promise(r => setTimeout(() => r(new DelaySearch(phrase)), 300));
}

async function search(state: State): Promise<Msg> {
    const sourceFn = state.sourceFn as any;

    try {
        const options = await sourceFn(state.phrase);
        return new SearchSuccess(options);
    } catch (err) {
        console.error('search failed', err);
        return new SearchFailure();
    }
}

function view(state: State): stateMgr.View<Msg> {
    return ['.sw-select', [
        ['style', style],
        ['span.button', {
            onclick: state.isDropdownVisible ? new CloseSelect() : new OpenSelect()
        }, tr(state.selected?.label ? state.selected.label : 'select.prompt')],
        ['.dropdown', {
            className: [
                state.isDropdownVisible ? 'show' : '',
                state.shouldDisplayAbove ? 'show-above' : ''
            ].join(' ')
        }, [
                ['input.input', {
                    type: 'text',
                    value: state.phrase,
                    placeholder: tr('select.placeholder'),
                    onkeyup: (event: KeyboardEvent) => new KeyboardMove(event.code),
                    oninput: (event: Event) => new SearchRequest((event as any).target.value)
                }],
                ['.results',
                    (state.displayedOptions ?? []).map(option => ['span.option', {
                        onclick: new Pick(option)
                    }, tr(option.label, option as any)])
                ]
            ]

        ],
        state.showLabel && ['label', { htmlFor: state.name }]
    ]];
}
