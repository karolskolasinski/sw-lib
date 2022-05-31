import { stm } from '../../'; // import { stm } from '@7willows/sw-lib';

interface User {
    login: string;
}

type State = {
    isLoading: boolean;
    hasLoadError: boolean;
    query: string;
    users: User[];
}

type Msg
    = { type: 'loadFailed' }
    | { type: 'loadSuccess', users: User[] }
    | { type: 'attr', name: string, value: unknown }

stm.component({
    tagName: 'gh-users',
    debug: true,
    attributeChangeFactory: (name, value) => ({ type: 'attr', name, value }),
    init(): [State, stm.Cmd<Msg>] {
        return [
            {
                isLoading: false,
                hasLoadError: false,
                users: [],
                query: '',
            },
            null
        ];
    },
    update,
    view
});

function update(state: State, msg: Msg): [State, stm.Cmd<Msg>] {
    if (msg.type === 'attr' && typeof msg.value === 'string') {
        state.query = msg.value;
        state.isLoading = true;
        state.hasLoadError = false;
        return [state, loadUsers(msg.value)]
    }
    if (msg.type === 'loadFailed') {
        state.hasLoadError = true;
        state.isLoading = false;
        return [state, null];
    }
    if (msg.type === 'loadSuccess') {
        state.hasLoadError = false;
        state.isLoading = false;
        state.users = msg.users;
        return [state, null];
    }
    return [state, null];
}

async function loadUsers(query: string): Promise<Msg> {
    try {
        const res = await fetch(`https://api.github.com/search/users?q=${query}`)
        const json = await res.json();
        return { type: 'loadSuccess', users: json.items };
    } catch (err) {
        console.error(err);
        return { type: 'loadFailed' }
    }
}

function view(state: State) {
    return <div class="gh-users">
        <h2>Github Users search for phrase: {state.query}</h2>
        {state.isLoading && <div class="loader">loading...</div>}
        {state.hasLoadError && <div class="danger">Error occured</div>}
        found:
        <ul>
            <>
                {state.users.map(user => <li>
                    {user.login}
                </li>)}
            </>
        </ul>
    </div>
}
