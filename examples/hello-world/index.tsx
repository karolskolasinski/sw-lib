import { stm } from '../../'; // import { stm } from '@7willows/sw-lib';

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
