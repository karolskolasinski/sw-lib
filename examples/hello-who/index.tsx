import { stm } from '../../'; // import { stm } from '@7willows/sw-lib';

type State = {
    display: 'idle' | 'question' | 'welcoming';
    name: string;
}
type Msg
    = { type: 'introduce' }
    | { type: 'input', name: string }
    | { type: 'confirmName' }

stm.component({
    tagName: 'hello-who',
    init(): [State, stm.Cmd<Msg>] {
        return [
            { display: 'idle', name: '' },
            null
        ];
    },
    update(state: State, msg: Msg) {
        if (msg.type === 'introduce') {
            return [
                { ...state, display: 'question' },
                null
            ];
        }

        if (msg.type === 'input') {
            return [
                { ...state, name: msg.name },
                null
            ]
        }

        if (msg.type === 'confirmName') {
            return [
                { ...state, display: 'welcoming' },
                null
            ]
        }
        return [state, null];
    },
    view
});

function view(state: State) {
    if (state.display === 'idle') {
        return <button onClick={{ type: 'introduce' }}>Introduce yourself</button>;
    }
    if (state.display === 'question') {
        return <div>
            <input type="text" onInput={(event: any) => ({ type: 'input', name: event.target.value })} />
            <button onClick={{ type: 'confirmName' }}>OK</button>
        </div>
    }
    return <p>Hello {state.name}!</p>;
}
