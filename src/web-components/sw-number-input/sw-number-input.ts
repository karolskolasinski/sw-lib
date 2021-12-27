import * as stm from '../../utils/state-mgr/state-mgr';
import { match, select, __ } from 'ts-pattern';
// @ts-ignore
import style from '../common/sw-input/sw-input.style.css'

interface State {
    disabled: boolean;
    showLabel: boolean;
    required: boolean;
    value: string;
    name: string;
    label: string;
    min?: number;
    max?: number;
    step?: number;
}

type Msg
    = [type: 'AttributeChange', name: string, value: string]
    | [type: 'Input', value: string, validationMessage: string];

const propTypes = {
    name: String,
    required: Boolean,
    label: String,
    disabled: Boolean,
    value: String,
    showLabel: Boolean,
    min: Number,
    max: Number,
    step: Number
}

stm.component({
    tagName: 'sw-number-input',
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
            label: ''
        }, null];
    },
    update(state: State, msg: Msg) {
        return match<Msg, [State, stm.Cmd<Msg>]>(msg)
            .with(['AttributeChange', select('name'), select('value')], ({ name, value }) => {
                if ((propTypes as any)[name] === Boolean) {
                    (state as any)[name] = value && value !== 'false';
                } else if ((propTypes as any)[name] === Number) {
                    (state as any)[name] = (value as any) + 0;
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

function view(state: State): stm.View<Msg> {
    return ['.sw-input.sw-text-input', [
        ['style', style],
        ['.input-wrapper', [
            ['input', {
                type: 'number',
                required: state.required,
                placeholder: ' ',
                disabled: state.disabled,
                value: state.value,
                min: state.min ?? '',
                max: state.max ?? '',
                step: state.step ?? '',
                ariaLabelledby: state.label,
                oninput: (event: any) => ['Input', event.target.value, event.target.validationMessage]
            }],
            state.showLabel && ['label', { htmlFor: state.name }, state.label]
        ]]
    ]];
}
