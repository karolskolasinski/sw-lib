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
    = [type: 'AttributeChange', name: string, value: string | boolean | string[]]
    | [type: 'Input', value: string]
    | [type: 'SuggestionChosen', suggestion: TypeAheadSuggestion]
    | [type: 'KeyDown', event: KeyboardEvent]

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
    attributeChangeFactory: (name, value): Msg => ['AttributeChange', name, value],
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
    update(state: State, msg: Msg) {
        return match<Msg, [State, stm.Cmd<Msg>]>(msg)
            .with(['AttributeChange', 'disabled', select()], disabled => {
                return [{ ...state, disabled: !!disabled && disabled !== 'false' }, null];
            })
            .with(['AttributeChange', 'name', select()], name => {
                return [{ ...state, name: name.toString() }, null];
            })
            .with(['AttributeChange', 'value', select()], value => {
                return [{ ...state, value: value.toString() }, null];
            })
            .with(['AttributeChange', 'class', select()], className => {
                return [{ ...state, className: className.toString() }, null];
            })
            .with(['AttributeChange', 'placeholder', select()], placeholder => {
                return [{ ...state, placeholder: placeholder.toString() }, null];
            })
            .with(['AttributeChange', 'suggestions', select()], (suggestions: any) => {
                return [{ ...state, suggestions: suggestions as TypeAheadSuggestion[] }, null];
            })
            .with(['AttributeChange', __, __], () => [state, null])
            .with(['Input', select()], value => [
                { ...state, value },
                new CustomEvent('update', {
                    bubbles: true,
                    detail: value,
                })
            ])
            .with(['SuggestionChosen', select()], suggestion => chooseSuggestion(state, suggestion))
            .with(['KeyDown', select()], event => {
                if (event.key === 'ArrowDown') {
                    if (!state.selectedSuggestion) {
                        state.selectedSuggestion = state.suggestions[0];
                    } else {
                        const index = state.suggestions.findIndex(s => s === state.selectedSuggestion);
                        const next = state.suggestions[index + 1];
                        state.selectedSuggestion = next || state.selectedSuggestion;
                    }

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

                    return [state, null];
                }

                if (event.key === 'Enter' && state.selectedSuggestion && state.suggestions.length > 0) {
                    return chooseSuggestion(state, state.selectedSuggestion);
                }

                return [state, null];
            })
            .with(['KeyDown', __], () => [
                state,
                null
            ])
            .exhaustive();
    },
    view
});

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
    return v.div<Msg>({
        className: 'sw-type-ahead ' + state.className
    },
        v.input({
            type: 'text',
            className: state.className,
            placeholder: state.placeholder,
            disabled: state.disabled,
            name: state.name,
            id: state.name,
            autocomplete: 'off',
            value: state.value,
            oninput: (event: any) => msg('Input', event.target.value),
            onkeydown: (event: any) => msg('KeyDown', event)
        }),
        state.suggestions && state.suggestions.length > 0 && v('ul.suggestions',
            ...state.suggestions.map(suggestion => v.li<Msg>({
                onClick: msg('SuggestionChosen', suggestion),
                className: state.selectedSuggestion === suggestion ? 'active' : ''
            },
                suggestion.suggestion
            ))
        )
    );
}
