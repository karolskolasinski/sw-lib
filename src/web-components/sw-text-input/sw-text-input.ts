import * as stm from '../../utils/state-mgr/state-mgr';
import { match, select, __ } from 'ts-pattern';
import { v } from '../../utils/v';
// @ts-ignore
import style from '../common/sw-input/sw-input.style.css';

interface State {
    disabled: boolean;
    showLabel: boolean;
    required: boolean;
    value: string;
    name: string;
    label: string;
    type: string;
}

type Msg
    = [type: 'AttributeChange', name: string, value: string | boolean]
    | [type: 'Input', value: string, validationMessage: string]

const propTypes = {
    name: String,
    required: Boolean,
    label: String,
    disabled: Boolean,
    value: String,
    showLabel: Boolean,
    type: String
};

stm.component({
    tagName: 'sw-text-input',
    shadow: true,
    attributeChangeFactory: (name, value): Msg => ['AttributeChange', name, value],
    propTypes,
    init(): [State, stm.Cmd<Msg>] {
        return [{
            disabled: false,
            showLabel: true,
            required: false,
            value: '',
            name: '',
            label: '',
            type: 'text'
        }, null];
    },
    update(state: State, msg: Msg) {
        return match<Msg, [State, stm.Cmd<Msg>]>(msg)
            .with(['AttributeChange', 'type', select()], (inputValue) => {
                state.type = ['text', 'password', 'email', 'color', 'search', 'url', 'tel'].includes(inputValue as string)
                    ? inputValue as string
                    : 'text';

                return [state, null];
            })
            .with(['AttributeChange', select('name'), select('value')], ({ name, value }: any) => {
                if ((propTypes as any)[name] === Boolean) {
                    (state as any)[name] = value && value !== 'false';
                } else if ((propTypes as any)[name]) {
                    (state as any)[name] = (value as any).toString();
                }
                return [state, null];
            })
            .with(['Input', select('value'), select('validationMessage')], ({ value, validationMessage }) => [
                { ...state, value },
                new CustomEvent('update', {
                    bubbles: true,
                    detail: {
                        name: state.name,
                        value,
                        error: validationMessage
                    },
                })
            ])
            .exhaustive();
    },
    view
});

function view(state: State) {
    return v<Msg>('.sw-input.sw-text-input',
        v.style(style),
        v('.input-wrapper',
            v.input({
                type: state.type,
                required: state.required,
                placeholder: ' ',
                disabled: state.disabled,
                name: state.name,
                value: state.value,
                ariaLabelledby: state.label,
                oninput: (event: any): Msg => ['Input', event.target.value, event.target.validationMessage]
            }),
            state.showLabel && v.label({ htmlFor: state.name }, state.label),
        )
    );
}
