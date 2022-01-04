import _ from 'lodash';
import * as stm from '../../utils/state-mgr/state-mgr';
import { v } from '../../utils/v';
import { match, select, __ } from 'ts-pattern';
// @ts-ignore
import style from '../common/sw-input/sw-input.style.css'

type State = {
    disabled: boolean;
    value: string;
    placeholder: string;
    showLabel: boolean;
    name: string;
}

type Msg
    = [type: 'AttributeChange', name: string, value: string]
    | [type: 'Input', value: string]

const propTypes = {
    value: String,
    disabled: Boolean,
    showLabel: Boolean
};

function attrToBool(attr: string | boolean): boolean {
    return !!attr && attr !== 'false';
}

stm.component({
    tagName: 'sw-markdown-input',
    shadow: true,
    attributeChangeFactory: (name, value): Msg => ['AttributeChange', name, value],
    propTypes,
    init(): [State, stm.Cmd<Msg>] {
        return [{
            disabled: false,
            value: '',
            placeholder: '',
            showLabel: true,
            name: Math.random().toString(36).slice(2)
        }, null];
    },
    update(state: State, msg: Msg) {
        return match<Msg, [State, stm.Cmd<Msg>]>(msg)
            .with(['AttributeChange', 'disabled', select()], disabled => [
                { ...state, disabled: attrToBool(disabled) },
                null
            ])
            .with(['AttributeChange', 'value', select()], value => [
                { ...state, value },
                null
            ])
            .with(['AttributeChange', 'placeholder', select()], placeholder => [
                { ...state, placeholder },
                null
            ])
            .with(['AttributeChange', 'showLabel', select()], showLabel => [
                { ...state, showLabel: attrToBool(showLabel) },
                null
            ])
            .with(['AttributeChange', 'name', select()], name => [
                { ...state, name },
                null
            ])
            .with(['AttributeChange', __, __], () => [
                state,
                null
            ])
            .with(['Input', select()], value => [
                { ...state, value },
                null
            ])
            .exhaustive();
    },
    view
});

function view(state: State): stm.View<Msg> {
    return v('.sw-markdown-editor.sw-input',
        v.style(style),
        v('.input-wrapper',
            v.textarea({
                type: 'number',
                placeholder: ' ',
                disabled: state.disabled,
                name: state.name,
                value: state.value,
                ariaLabelledby: state.placeholder,
                oninput: (event: any): Msg => ['Input', event.target.value]
            }),
            state.showLabel && v.label({ htmlFor: state.name }, state.placeholder)
        )
    );
}
