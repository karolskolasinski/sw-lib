import * as stateMgr from '../../utils/state-mgr/state-mgr';
// @ts-ignore
import style from '../common/sw-input/sw-input.style.css'

interface State {
    disabled: boolean;
    showLabel: boolean;
    required: boolean;
    value: string;
    name: string;
    label: string;
}

class AttributeChange {
    constructor(
        public name: string,
        public value: unknown
    ) { }
}

class Input {
    constructor(
        public value: string,
        public validationMessage: string
    ) { }
}

type Msg
    = AttributeChange
    | Input;

const propTypes = {
    name: String,
    required: Boolean,
    label: String,
    disabled: Boolean,
    value: String,
    showLabel: Boolean
}

stateMgr.component({
    tagName: 'sw-text-input',
    shadow: true,
    AttributeChange,
    propTypes,
    init(): [State, stateMgr.Cmd<Msg>] {
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
        if (msg instanceof AttributeChange) {
            if ((propTypes as any)[msg.name] === Boolean) {
                (state as any)[msg.name] = msg.value && msg.value !== 'false';
            } else if ((propTypes as any)[msg.name]) {
                (state as any)[msg.name] = (msg.value as any).toString();
            }
            return [state, null];
        }

        if (msg instanceof Input) {
            state.value = msg.value;
            return [state, new CustomEvent('update', {
                bubbles: true,
                detail: {
                    name: state.name,
                    value: msg.value,
                    error: msg.validationMessage
                },
            })]
        }
    },
    view
});

function view(state: State): stateMgr.View<Msg> {
    return ['.sw-input.sw-text-input', [
        ['style', style],
        ['.input-wrapper', [
            ['input', {
                type: 'text',
                required: state.required,
                placeholder: ' ',
                disabled: state.disabled,
                value: state.value,
                ariaLabelledby: state.label,
                oninput: (event: any) => new Input(event.target.value, event.target.validationMessage)
            }],
            state.showLabel && ['label', { htmlFor: state.name }, state.label],
        ]]
    ]];
}
