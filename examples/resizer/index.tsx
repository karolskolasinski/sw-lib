import { stm } from '../../'; // import { stm } from '@7willows/sw-lib';

type State = {
    width: number;
    height: number;
}

type Msg = { type: 'resize', width: number, height: number }

stm.component({
    tagName: 'my-resizer',
    willMount(cmp: any, dispatch: stm.Dispatch<Msg>) {
        cmp.onResize = function() {
            dispatch({
                type: 'resize',
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener('resize', cmp.onResize);
    },
    willUnmount(cmp: any) {
        window.removeEventListener('resize', cmp.onResize);
    },
    init(): [State, stm.Cmd<Msg>] {
        return [
            { width: 100, height: 100 },
            null
        ];
    },
    update,
    view
});

function update(state: State, msg: Msg): [State, stm.Cmd<Msg>] {
    if (msg.type === 'resize') {
        state.width = msg.width / 2;
        state.height = msg.height / 2;
        return [state, null];
    }
    return [state, null];
}

function view(state: State) {
    return <div style={getStyles(state)}></div>
}

function getStyles(state: State) {
    return `
background-color: red;
width: ${state.width}px;
height: ${state.height}px;
    `
}
