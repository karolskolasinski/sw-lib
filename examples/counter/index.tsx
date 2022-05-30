import { stm } from '../../'; // import { stm } from '@7willows/sw-lib';

type State = {
    count: number;
}
type Msg = { type: 'attr', name: string, value: unknown }

stm.component({
    tagName: 'my-counter',
    propTypes: {
        count: Number
    },
    attributeChangeFactory: (name, value) => ({ type: 'attr' as const, name, value }),
    init(): [State, stm.Cmd<Msg>] {
        return [
            { count: 0 },
            null
        ];
    },
    update,
    view
});

function update(state: State, msg: Msg): [State, stm.Cmd<Msg>] {
    if (msg.type === 'attr' && typeof msg.value === 'string') {
        state.count = parseInt(msg.value, 10);
    } else if (msg.type === 'attr' && typeof msg.value === 'number') {
        state.count = msg.value;
    }

    return [state, null];
}

function view(state: State) {
    return <p>Current count: {state.count}</p>
}
