import * as stm from '../../utils/state-mgr/state-mgr';
import { v } from '../../utils/v';
import { match, select, __ } from 'ts-pattern';
// @ts-ignore
import style from '../common/sw-input/sw-input.style.css'

type State = {}

type Msg
    = [type: 'AttributeChange', name: string, value: string];

const propTypes = {
    value: String;
    disabled: Boolean;
    showLabel: Boolean;
}

stm.component({
    tagName: 'sw-number-input',
    shadow: true,
    attributeChangeFactory: (name, value): Msg => ['AttributeChange', name, value],
    propTypes,
    init(): [State, stm.Cmd<Msg>] {
        return [{}, null];
    },
    update(state: State, msg: Msg) {
        return [state, msg];
    },
    view
});

function view(state: State): stm.View<Msg> {
    return v('.sw-input.sw-text-input',
        v.style(style),
        v('.input-wrapper',
            v.textarea({
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
