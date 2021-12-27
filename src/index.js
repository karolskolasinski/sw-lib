import register from 'preact-custom-element';
import SwButton from './web-components/sw-button/sw-button.jsx';
import SwDatetimeInput from './web-components/sw-datetime-input/sw-datetime-input.jsx';
import SwLoader from './web-components/sw-loader/sw-loader.jsx';
import './web-components/sw-pagination/sw-pagination.ts';
import './web-components/sw-select/sw-select.ts';
import './web-components/sw-text-input/sw-text-input.ts';
import './web-components/sw-number-input/sw-number-input.ts';
import './web-components/sw-map/sw-map.js';


import * as routerModule from './utils/router.ts';
export var router = routerModule.router;

import * as trModule from './utils/tr';
export var tr = trModule.tr;

export * from './utils/flash-message/flash-message.ts';
export * from './utils/modal/modal.jsx';
export * as stm from './utils/state-mgr/state-mgr';
export * as dates from './utils/dates';
export * as strings from './utils/strings';

const areElementsRegistered = !!customElements.get('sw-button');

if (!areElementsRegistered) {
    register(
        SwButton,
        'sw-button',
        ['icon', 'disabled', 'href'],
        { shadow: true },
    );
    register(
        SwDatetimeInput,
        'sw-datetime-input',
        ['name', 'required', 'placeholder', 'disabled', 'value', 'step', 'show-label'],
        { shadow: true },
    );
    register(
        SwLoader,
        'sw-loader',
        [],
        { shadow: true },
    );
}
