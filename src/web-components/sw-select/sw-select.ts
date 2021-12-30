import * as stm from '../../utils/state-mgr/state-mgr';
import { flashMessage } from '../../utils/flash-message/flash-message';
import { tr } from '../../utils/tr';
import { match, select, __, not } from 'ts-pattern';
// @ts-ignore
import style from './sw-select.css';

type Msg
    = [type: 'AttributeChange', name: string, value: string]
    | 'OpenSelect'
    | 'CloseSelect'
    | 'ToggleSelect'
    | [type: 'Pick', option: SelectOption]
    | [type: 'KeyboardMove', keyCode: string]
    | [type: 'SearchRequest', phrase: string]
    | [type: 'DelaySearch', phrase: string]
    | [type: 'SearchSuccess', options: SelectOption[]]
    | 'SearchFailure'


interface SelectOption {
    label: string;
    value: string | number;
}

interface State {
    label?: string;
    name?: string;
    isLoading: boolean;
    phrase: string;
    showLabel?: boolean;
    selected?: SelectOption;
    minimumCharLengthTrigger: number;
    options?: SelectOption[];
    sourceFn?: (value: string) => Promise<SelectOption[]>;
    isDropdownVisible?: boolean;
    shouldDisplayAbove?: boolean;
    displayedOptions: SelectOption[];
}

stm.component({
    tagName: 'sw-select',
    propTypes: {
        config: Object
    },
    shadow: true,
    debug: false,
    view,
    attributeChangeFactory: (name, value): Msg => ['AttributeChange', name, value],
    willMount(cmp: any, dispatch: stm.Dispatch<Msg>) {
        cmp.closeSelect = (event: MouseEvent) => {
            if (event.target !== cmp.ref.getRootNode().host) {
                dispatch('CloseSelect');
            }
        };
        document.addEventListener('mousedown', cmp.closeSelect);
    },
    willUnmount(cmp: any) {
        document.removeEventListener('mousedown', cmp.closeSelect);
    },
    init() {
        return [{
            minimumCharLengthTrigger: 2,
            isLoading: false,
            displayedOptions: [],
            phrase: ''
        }, null];
    },
    update(state: State, msg: Msg) {
        return match<[State, Msg], [State, stm.Cmd<Msg>]>([state, msg])
            .with([__, ['AttributeChange', 'config', select()]], (config: any) => [
                {
                    ...config,
                    label: config.label || config.name,
                    isDropdownVisible: false,
                    shouldDisplayAbove: false,
                    displayedOptions: config.options ?? [],
                    showLabel: config.showLabel && config.showLabel !== 'false'
                },
                null
            ])
            .with([__, ['AttributeChange', __, __]], () => [state, null])
            .with([__, 'OpenSelect'], () => [
                { ...state, isDropdownVisible: true, isLoading: false },
                stm.focus('.input')
            ])
            .with([__, ['KeyboardMove', 'Escape']], () => [{ ...state, isDropdownVisible: false }, null])
            .with([__, ['KeyboardMove', __]], () => [state, null])
            .with([__, 'CloseSelect'], () => [
                { ...state, isDropdownVisible: false, isLoading: false },
                null
            ])
            .with([__, 'ToggleSelect'], () => [
                { ...state, isDropdownVisible: !state.isDropdownVisible, isLoading: false },
                stm.focus('.input')
            ])
            .with([__, ['Pick', select()]], (option) => [
                { ...state, isLoading: false, isDropdownVisible: false, selected: option },
                new CustomEvent('update', {
                    detail: {
                        name: state.name,
                        value: option
                    },
                    bubbles: true,
                })
            ])
            .with([{sourceFn: __.nullish}, ['SearchRequest', select()]], (phrase) => {
                if (state.minimumCharLengthTrigger > phrase.length) {
                    return [{ ...state, phrase }, null];
                }
                return [
                    {
                        ...state,
                        phrase,
                        displayedOptions: state.options?.filter(o => o.label.includes(phrase)) ?? []
                    }, null
                ];
            })
            .with([__, ['SearchSuccess', select()]], (options) => [
                { ...state, isLoading: true, displayedOptions: options },
                null
            ])
            .with([__, 'SearchFailure'], () => {
                flashMessage(tr('select.searchFailed'), 'error');
                return [{ ...state, isLoading: false, }, null];
            })

            .with([{ sourceFn: not(__.nullish) }, ['SearchRequest', select()]], (phrase) => {
                if (state.minimumCharLengthTrigger > phrase.length) {
                    return [{ ...state, phrase }, null];
                }
                return [{ ...state, phrase }, delaySearch(phrase)];
            })
            .with([__, ['DelaySearch', select()]], (phrase) => {
                if (state.phrase === phrase) {
                    return [{ ...state, isLoading: true }, search(state)]
                } else {
                    return [state, null]
                }
            })
            .run();
    }
});


function delaySearch(phrase: string): Promise<Msg> {
    return new Promise(r => setTimeout(() => r(['DelaySearch', phrase])));
}

async function search(state: State): Promise<Msg> {
    const sourceFn = state.sourceFn as any;

    try {
        const options = await sourceFn(state.phrase);
        return ['SearchSuccess', options]
    } catch (err) {
        console.error('search failed', err);
        return 'SearchFailure';
    }
}

function view(state: State): stm.View<Msg> {
    const title = state.selected?.label
        ? trMaybe(state.selected?.label, state.selected)
        : tr('select.prompt');

    return ['.sw-select', [
        ['style', style],
        ['span.button', {
            onclick: 'ToggleSelect',
            title
        }, title],
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
                    onkeyup: (event: KeyboardEvent) => ['KeyboardMove', event.code],
                    oninput: (event: any) => ['SearchRequest', event?.target?.value]
                }],
                ['.results',
                    (state.displayedOptions ?? []).map(option => ['span.option', {
                        onclick: ['Pick', option]
                    }, trMaybe(option.label, option)])
                ]
            ]

        ],
        (state as any).showLabel && ['label', { htmlFor: state.name }, state.label]
    ]];
}

function trMaybe(item: string | Record<string, string>, translationOptions?: any): string {
    if (typeof item === 'string') {
        return item;
    }
    return tr(item, translationOptions);
}
