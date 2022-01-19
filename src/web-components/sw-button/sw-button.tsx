import * as stm from '../../utils/state-mgr/state-mgr';
import { match, select, __ } from 'ts-pattern';
// @ts-ignore
import style from './sw-button.style.css';

type State = {
    isDisabled: boolean,
    href: string,
    children: any,
    msg: string
};

type Msg = [type: 'AttributeChange', name: string, value: string];

stm.component({
    tagName: 'sw-button',
    shadow: true,
    debug: false,
    propTypes: {
        isDisabled: Boolean,
        href: String
    },
    attributeChangeFactory: (name: string, value: string): Msg => ['AttributeChange', name, value],
    init() {
        return [{ isDisabled: false, children: '', href: '', msg: '' }, null];
    },
    update(state: State, msg: Msg) {
        return match<Msg, [State, stm.Cmd<Msg>]>(msg)
            .with(['AttributeChange', 'isDisabled', select()], isDisabled => [{ ...state, isDisabled: !!isDisabled }, null])
            .with(['AttributeChange', 'href', select()], href => [{ ...state, href }, null])
            .with(['AttributeChange', 'children', select()], children => [{ ...state, children }, null])
            .with(['AttributeChange', __, __], () => [state, null])
            .exhaustive();
    },
    view(state: State): stm.View<Msg> {
        return <>
            <style> {style}</style>
            {!state.isDisabled && state.href
                ? <a className="button" href={state.href}>{state.children}</a>
                : <button className="button"
                    type="button"
                    role="button"
                    disabled={state.isDisabled}>{state.children}
                </button>}
        </>
    }
});
