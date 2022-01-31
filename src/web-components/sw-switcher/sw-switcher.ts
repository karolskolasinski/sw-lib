import * as stm from '../../utils/state-mgr/state-mgr';
import { match, select, __ } from 'ts-pattern';
// @ts-ignore
import style from './sw-switcher.css';

interface State {
    disabled: boolean;
    showLabel: boolean;
    required: boolean;
    name: string;
    label: string;
    checked: boolean;
    dataLabelOn: string;
    dataLabelOff: string;
}

type Msg
    = [type: 'AttributeChange', name: string, value: string]
    | [type: 'Input', value: string, validationMessage: string];

const propTypes = {
    name: String,
    required: Boolean,
    label: String,
    disabled: Boolean,
    showLabel: Boolean,
    checked: Boolean,
    dataLabelOn: String,
    dataLabelOff: String,
};

stm.component({
    tagName: 'sw-switcher',
    shadow: true,
    attributeChangeFactory: (name, value): Msg => ['AttributeChange', name, value],
    propTypes,
    init(): [State, stm.Cmd<Msg>] {
        return [{
            disabled: false,
            showLabel: true,
            required: false,
            name: '',
            label: '',
            checked: false,
            dataLabelOn: '',
            dataLabelOff: ''
        }, null];
    },
    update(state: State, msg: Msg) {
        return match<Msg, [State, stm.Cmd<Msg>]>(msg)
            .with(['AttributeChange', select('name'), select('value')], ({ name, value }) => {
                if ((propTypes as any)[name] === Boolean) {
                    (state as any)[name] = value && value !== 'false';
                } else if ((propTypes as any)[name]) {
                    (state as any)[name] = (value as any).toString();
                }
                return [state, null];
            })
            .with(['Input', __, __], () => {
                state.checked = !state.checked;
                return [
                    { ...state },
                    new CustomEvent('update', {
                        bubbles: true,
                        detail: {
                            name: state.name,
                            value: state.checked,
                            error: (state.required && !state.checked) ? 'Field required' : ''
                        },
                    })
                ];
            })
            .exhaustive();
    },
    view
});

function view(state: State): stm.View<Msg> {
    return ['.sw-input.sw-switcher', [
        ['style', style],
        ['.input-wrapper', [
            ['input.switcher', {
                'data-label-on': state.dataLabelOn,
                'data-label-off': state.dataLabelOff,
                type: 'checkbox',
                required: state.required,
                disabled: state.disabled,
                ariaLabelledby: state.label,
                checked: state.checked && state.checked,
                oninput: () => ['Input', __, __]
            }],
            ['.bullet-wrapper', {
                'data-label-on': state.dataLabelOn,
                'data-label-off': state.dataLabelOff
            }, [
                ['.bullet', ''],
            ]],
            state.showLabel && ['label', { htmlFor: state.name }, state.label]
        ]]
    ]];
}
