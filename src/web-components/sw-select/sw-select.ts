import * as stateMgr from '../../utils/state-mgr/state-mgr';
import tr from '../../utils/tr';
// @ts-ignore
import style from './sw-select.css';

class AttributeChange {
    constructor(
        public name: string,
        public value: any
    ) { }
}

class OpenSelect { }

class KeyboardMove {
    constructor(
        public keyCode: string
    ) { }
}

class SearchRequest {
    constructor(
        public phrase: string
    ) { }
}

class Pick {
    constructor(
        public option: SelectOption
    ) { }
}

type Msg
    = AttributeChange
    | OpenSelect
    | KeyboardMove
    | SearchRequest;

interface SelectConfig { }
interface SelectOption {
    label: string;
    value: string | number;
}

interface State {
    name?: string;
    showLabel?: boolean;
    selected?: SelectOption;
    minimumCharLengthTrigger: number;
    options?: SelectOption[]
    sourceFn?: (value: string) => Promise<SelectOption[]>;
    isDropdownVisible?: boolean;
    shouldDisplayAbove?: boolean;
    error?: string;
}

stateMgr.component({
    tagName: 'sw-select',
    propTypes: {
        config: Object
    },
    init,
    update,
    view,
    AttributeChange
});

function init(): [State, null] {
    return [{
        minimumCharLengthTrigger: 2
    }, null];
}

function update(state: State, msg: Msg): [State, stateMgr.Cmd<Msg>] | undefined {
    if (msg instanceof AttributeChange) {
        if (msg.name === 'config' && msg.value instanceof Object) {
            return [{
                ...msg.value,
                isDropdownVisible: false,
                shouldDisplayAbove: false
            }, null];
        } else {
            return [state, null];
        }
    }
    return [state, null];
}

function view(state: State): stateMgr.View<Msg> {
    return ['.sw-select', [
        ['style', style],
        ['button.button', { onClick: new OpenSelect() }, tr('select.prompt')],
        ['.dropdown', {
            className: (state.isDropdownVisible ? 'show' : '') + ' ' + (state.shouldDisplayAbove ? 'show-above' : ''),

        }, [
                ['input.input', {
                    type: 'text',
                    placeholder: tr('select.placeholder'),
                    onKeyUp: (event: KeyboardEvent) => new KeyboardMove(event.code),
                    onInput: (event: Event) => new SearchRequest((event as any).target.value)
                }]
            ],
            ['.results', [
                (state.options ?? []).map(option => ['span.option', {
                    onClick: new Pick(option)
                }, tr(option.label, option as any)])
            ]],
            state.error && ['p.error', tr(state.error)]
        ],
        state.showLabel && ['label', { htmlFor: state.name }]
    ]];
}
