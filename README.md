# sw-lib

## Table of Contents

- web-components
    - [sw-button](#sw-button)
    - [sw-loader](#sw-loader)
    - [sw-number-input](#sw-number-input)
    - [sw-pagination](#sw-pagination)
    - [sw-table](#sw-table)
    - [sw-text-input](#sw-text-input)
- utils
    - [sw-flash-message](#sw-flash-message)
    - [sw-modal](#sw-modal)
	- [stm - Preact State Manager and Web Component builder](#stm)

<a name="sw-button"></a>

## sw-button

### HTML

To use a component provide the tag `sw-button` with required attributes:

- `icon` -
- `disabled` -

Example of use:

```html
<sw-button
        icon="magnifier"
        disabled="false">
</sw-button>
```

### CSS

You can style the component changing the following options in the `:host` selector:

- `--foreground-color`
- `--primary-color-70`
- `--primary-color-40`
- `--primary-color-100`


- Example of use:

```css
:host {
    --foreground-color: white;
    --primary-color-70: rgba(98, 191, 124, .7);
    --primary-color-40: rgba(98, 191, 124, .4);
    --primary-color-100: rgba(98, 191, 124, 1);
}
```

<a name="sw-modal"></a>

## sw-modal

### JS

To use the sw-modal call the `modal()` function, which takes an object as an argument. The object should contain the following keys:

- `header` - can be a `string` or a `function({ close }):string` or a `function({ close }):JSX` or `JSX`
- `body` - can be a `string` or a `function({ close }):string` or a `function({ close }):JSX` or `JSX`
- `footer` - can be a `string` or a `function({ close }):string` or a `function({ close }):JSX` or `JSX`
- `large` - `boolean`

The object cannot be specified without any parameters.

Example of use:

```jsx
const result = await modal({
    header: 'Welcome',
    body: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>,
    footer: ({ close }) => <sw-button onClick={() => close(true)}>OK</sw-button>,
    large: true
})
```

### CSS

You can style the component changing the following options in the `:host` selector on your index.html:

- `--background-color` - modal background color
- `--radius` - modal border radius

Example of use:

```css
:host {
    --background-color: ghostwhite;
    --radius: 5px;
}
```

<a name="stm"></a>
## STM - State Manager

`stm` is a state manager for preact. It's main concept is borrowed from ELM Architecture, although it differs in many edge cases. The goal of he `stm` is to create a **web component** which could be plugged into any other framework. 

This tutorial will present various examples that will help you understand how to work with `stm`. The examples can be found in the `examples` directory of this repository.

### "Hello World"

*index.html*
```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>STM Hello World example</title>
        <script src="./index.compiled.js"></script>
    </head>
    <body>
        <hello-world></hello-world>
    </body>
</html>
```

*index.tsx (compiled to **index.compiled.js**)*
```ts
import { stm } from '@7willows/sw-lib';

stm.component({
    tagName: 'hello-world',
    init() {
        return [{}, null];
    },
    update() {
        return [{}, null];
    },
    view
});

function view() {
    return <p>Hello World!</p>
}
```

the compilation was done using this command:

```bash
esbuild index.tsx --bundle --outfile=index.compiled.js --sourcemap --jsx-factory=h --jsx-fragment=Fragment --inject:./preact-shim.js --format=esm
```

`stm.component` accepts a configuration object. In the above example we are specifying the minimum set of arguments needed for the component to run.

Make notice the `tagName` property. It must be a tag name of the new Web Component. The specification of custom elements requires the tag name to have a dash (`-`) that's why we cannot simply name our component: `hello` - this won't work. The good practice is to have a prefix for a certain library or project and use this prefix everywhere. For example in this library the prefix for all web components is `sw-`.

### Basic interactivity

In the previous example we created a component that does nothig. To add some interactivity we need to understand the data flow of a stm component:

![STM data flow](./stm-diagram.svg "STM data flow")

There are two most importand concepts in `stm`:

1. **state** - a state is any data that represents current state of a component.
2. **msg** - a message represents a change. It may be user clicking a button, form input or some outside change like a received data from a websocket connection.

Let's write a **hello-who** component which will demonstrate the above mentioned data flow:

*index.html*
```
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>STM Hello Who example</title>
        <script src="./index.compiled.js"></script>
    </head>
    <body>
        <hello-who></hello-who>
    </body>
</html>
```

*index.tsx (compiled to **index.compiled.js**)*
```ts
import { stm } from '@7willows/sw-lib';

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
```

Make notice that both `init` and `update` functions return an array of two elements. The first element is a new state and the second is a command. Commands are required if we want to do something outside the component but we will talk about them later. In current component we don't need any commands so we just use `null` as a command.

Important things to consider in the above example:

1. `init` returns a new state (along with a null in place of command)
2. next `view` renders html according to the `state` returned by the `init` function
3. when user interacts with the view `msg` is returned (see: `<button onClick={{ type: 'introduce' }}>Introduce yourself</button>` i.e.). The event handler can also be a function like in here: `<input type="text" onInput={(event: any) => ({ type: 'input', name: event.target.value })} />` - this form can be used when we need an `event` object).
4. the generated `msg` goes to the `update(state, msg)` function
5. the `update` function returns a new `state` with a command (in our case the command is `null`).
6. the `view` function is executed again with the new `state` returned from `update` and the rerender is invoked.
7. and so on in a loop...

### Debug mode

Every view is rendered based on state, this means that having a state we can recreate how the app looked like in any moment. Quite often when debugging a `stm` component you will want to know what was the state before certain msg and what was the state after a msg. To show this info enable `debug` in the `stm.component` arguments:

```ts
stm.component({
    tagName: 'hello-who',
	debug: true,
	init, 
	update,
    view
});
```

Now every change to state will be logged in a devtools console.

### Shadow DOM

to enable shadow dom use `shadow: true` in the component options:

```ts
stm.component({
    tagName: 'hello-who',
	shadow: true,
	init, 
	update,
    view
});
```

at this point the web component will be rendered in a shadow dom.

### Component attributes

It's often the case that a web component has some attributes. Moreover the attributes are not something static - they can change at any given moment. To deal with changing attributes you have to translate an attribute to a msg, because this is how we deal with changes in `stm`. Additionally we need to specify the list of expected attributes with their types. Let's have a simple example: a counter that will increase it's displayed value every second - however this time the displayed value will come from the outside.

*index.html*
```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>STM counter example</title>
        <script src="./index.compiled.js"></script>
    </head>
    <body>
        <my-counter count="0"></my-counter>

        <script>
         const $counter = document.querySelector('my-counter');
         let count = 0;
         
         setInterval(function () {
             count += 1;
             $counter.setAttribute('count', count);
         }, 1000);
        </script>
    </body>
</html>
```

The above script every second changes the `count` attribute of `my-counter` component.


*index.tsx (compiled to **index.compiled.js**)*
```ts
import { stm } from '@7willows/sw-lib';

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
```

Make notice:

1. we have to specify the list of attributes in: `propTypes`
2. the `propTypes` take attribute name and attribute type. The type of an attribute is a a value constructor (Boolean, Number, String, Object, Array)
3. you have to translate the attribute change into a msg. This is done in `attributeChangeFactory`
4. the message: `{ type: 'attr', name: string, value: unknown }` has the `value` property of type `unknown` because we don't know what the outside world will pass to our component. That's why we need to be prepared for an unknown. Normally all attributes are strings however if this web component would be put into some other preact/react application then the specific data type would be passed instead of a string. That's why we should cover both cases:

```ts
if (msg.type === 'attr' && typeof msg.value === 'string') {
    state.count = parseInt(msg.value, 10);
} else if (msg.type === 'attr' && typeof msg.value === 'number') {
    state.count = msg.value;
}
```

### Making an asynchronous call 

To make an async call we have to take advantage of the `stm.Cmd<Msg>` property returned from both `init` and `update` functions. This is known as a "command". It might be a `Promise<Msg>`, `stm.Focus()` or a custom event that should be dispatched on this component. To make an async call we will set a promise for `Msg` as a command. Consider this example:


*index.html*
```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>STM GitHub Users example</title>
        <script src="./index.compiled.js"></script>
    </head>
    <body>
        <gh-users query="7willows"></gh-users>
    </body>
</html>
```

*index.tsx (compiled to **index.compiled.js**)*
```ts
import { stm } from '@7willows/sw-lib';

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
```

The flow of the program:

1. when "query" attribute is changed (or set initially), the `update` function returns a state with a command. In our case a command is a promise for msg: `return [state, loadUsers(msg.value)]`.
2. in the `loadUsers` we make an async call and return a `Msg`.
3. as a result the returned msg is an input for the next invocation of the `update` function.
4. at this point `update` function changes its state by setting the users
5. next `view` renders the users

Make notice that when we started an async request the state was changed (`isLoading` property was added to the state). It is a good practice to show user that something is loading. Not every user has a good internet connection.


### Dealing with outside world changes

Sometimes we have to listen to some events that are not DOM based. In such cases we have to manually dispatch a msg. A dispatched msg is used as an argument for the `update` function.

*index.html*
```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>STM Resizer example</title>
        <script src="./index.compiled.js"></script>
    </head>
    <body>
        <my-resizer></my-resizer>
    </body>
</html>
```

*index.tsx (compiled to **index.compiled.js**)*
```ts
import { stm } from '@7willows/sw-lib';

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
```

This component resizes its div whenever a window resize happens. Of course it would be much simpler to use `width: 50%; height: 50%` to do the job, but this is just an example.

Important thigs to notice in this example:

1. `willMount` is a function that is called whenever the component is about to be inserted into the DOM
2. `willUnmount` is a function that is called just before an element is removed from DOM
3. the `cmp` attribute of `willMount` and `willUnmount` is a preact component object. You cannot do much with it (and you shouldn't) however it serves very wall as an holder for storing handlers that should be later removed
4. whenever you add some event listener in `willMount` don't forget to remove it in `willUnmount`
5. The `init` function also receives the `dispatch` function as an argument however it's usually better to use `willMount` and `willUnmount` functions for dealing with outside changes because `willUnmount` allows us to clean up.
