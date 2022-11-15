import * as stm from '../../utils/state-mgr/state-mgr';
import { match, select, __ } from 'ts-pattern';
import { v } from '../../utils/v';

export interface TypeAheadSuggestion {
    suggestion: string;
    value: string;
}

interface State {
    name: string;
    disabled: boolean;
    value: string;
    placeholder: string;
    suggestions: TypeAheadSuggestion[];
    className: string;
    selectedSuggestion?: TypeAheadSuggestion;
}

type Msg
    = [type: 'Attr', name: string, value: string | boolean | string[]]
    | [type: 'Input', value: string]
    | [type: 'SuggestionChosen', suggestion: TypeAheadSuggestion]
    | [type: 'Key', event: KeyboardEvent]
    | [type: 'HideSuggestions']
    | [type: 'HideSuggestionsDeleyed']

function msg(...args: Msg): Msg {
    return args;
}

const propTypes = {
    id: String,
    disabled: Boolean,
    value: String,
    placeholder: String,
    suggestions: Array,
    class: String
};

stm.component({
    tagName: 'sw-type-ahead',
    shadow: false,
    debug: false,
    attributeChangeFactory: (name, value): Msg => ['Attr', name, value],
    propTypes,
    init(): [State, stm.Cmd<Msg>] {
        return [{
            disabled: false,
            value: '',
            name: '',
            placeholder: '',
            suggestions: [],
            className: ''
        }, null];
    },
    update(state: State, incomingMsg: Msg) {
        return match<Msg, [State, stm.Cmd<Msg>]>(incomingMsg)
            .with(['Attr', 'disabled', select()], disabled => {
                return [{ ...state, disabled: !!disabled && disabled !== 'false' }, null];
            })
            .with(['Attr', 'name', select()], name => {
                return [{ ...state, name: name.toString() }, null];
            })
            .with(['Attr', 'value', select()], value => {
                if (state.value === value) {
                    return [state, null];
                }
                return [{ ...state, value: value.toString() }, null];
            })
            .with(['Attr', 'class', select()], className => {
                return [{ ...state, className: className.toString() }, null];
            })
            .with(['Attr', 'placeholder', select()], placeholder => {
                return [{ ...state, placeholder: placeholder.toString() }, null];
            })
            .with(['Attr', 'suggestions', select()], (suggestions: any) => {
                return [{ ...state, suggestions: suggestions as TypeAheadSuggestion[] }, null];
            })
            .with(['Attr', __, __], () => [state, null])
            .with(['Input', select()], value => [
                { ...state, value },
                new CustomEvent('update', {
                    bubbles: true,
                    detail: value,
                })
            ])
            .with(['HideSuggestionsDeleyed'], () => [
                { ...state, suggestions: [] },
                null
            ])
            .with(['HideSuggestions'], () => [
                state,
                waitAndDispatch(msg('HideSuggestionsDeleyed'), 500)
            ])
            .with(['SuggestionChosen', select()], suggestion => chooseSuggestion(state, suggestion))
            .with(['Key', select()], event => {
                if (event.key === 'ArrowDown') {
                    if (!state.selectedSuggestion) {
                        state.selectedSuggestion = state.suggestions[0];
                    } else {
                        const index = state.suggestions.findIndex(s => s === state.selectedSuggestion);
                        const next = state.suggestions[index + 1];
                        state.selectedSuggestion = next || state.selectedSuggestion;
                    }

                    event.preventDefault();
                    return [state, null];
                }

                if (event.key === 'ArrowUp') {
                    if (!state.selectedSuggestion) {
                        state.selectedSuggestion = state.suggestions[state.suggestions.length - 1];
                    } else {
                        const index = state.suggestions.findIndex(s => s === state.selectedSuggestion);
                        const next = state.suggestions[index - 1];
                        state.selectedSuggestion = next || state.selectedSuggestion;
                    }

                    event.preventDefault();
                    return [state, null];
                }

                if (event.key === 'Enter' && state.selectedSuggestion && state.suggestions.length > 0) {
                    return chooseSuggestion(state, state.selectedSuggestion);
                }

                return [state, null];
            })
            .exhaustive();
    },
    view
});

async function waitAndDispatch(msg: Msg, delay: number) {
    await new Promise(resolve => setTimeout(resolve, delay));
    return msg;
}

function chooseSuggestion(state: State, suggestion: any): [State, stm.Cmd<Msg>] {
    return [
        {
            ...state,
            value: suggestion.value,
            suggestions: [],
            selectedSuggestion: undefined
        },
        new CustomEvent('update', {
            bubbles: true,
            detail: suggestion.value
        })
    ];
}

function view(state: State) {
    return <div class={'sw-type-ahead ' + state.className}>
        <input
            type="text"
            class={state.className}
            placeholder={state.placeholder}
            disabled={state.disabled}
            name={state.name}
            id={state.name}
            autocomplete="off"
            value={state.value}
            onInput={(event: any) => msg('Input', event.target.value)}
            onKeyDown={(event: any) => {
                if (event.key === 'Enter' && state.suggestions.length > 0) {
                    event.stopPropagation();
                    event.preventDefault();
                }
                return msg('Key', event)
            }}
            onBlur={msg('HideSuggestions') as any}
        />
        {!!state.suggestions && state.suggestions.length > 0 && <ul class="suggestions">
            <>
                {state.suggestions.map(suggestion => <li
                    onClick={msg('SuggestionChosen', suggestion) as any}
                    class={state.selectedSuggestion === suggestion ? 'active' : ''}>
                    {suggestion.suggestion}
                </li>)}
            </>
        </ul>}
    </div >
}
