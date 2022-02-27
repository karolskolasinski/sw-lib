// @ts-ignore
import register from 'preact-custom-element';
// @ts-ignore
import SwDatetimeInput from './web-components/sw-datetime-input/sw-datetime-input.jsx';

import './web-components/sw-loader/sw-loader.jsx';
import './web-components/sw-mini-loader/sw-mini-loader.tsx';
import './web-components/sw-pagination/sw-pagination';
import './web-components/sw-select/sw-select';
import './web-components/sw-switcher/sw-switcher';
import './web-components/sw-text-input/sw-text-input';
import './web-components/sw-number-input/sw-number-input';
// @ts-ignore
import './web-components/sw-map/sw-map.js';
import './web-components/sw-button/sw-button.jsx';
import './web-components/sw-markdown-input/sw-markdown-input';

import * as routerModule from './utils/router';
export var router = routerModule.router;

export * from './utils/tr';

export * from './utils/flash-message/flash-message';
export * from './utils/modal/modal';
export * as stm from './utils/state-mgr/state-mgr';
// @ts-ignoreR
export * as dates from './utils/dates';
export * as strings from './utils/strings';
export * from './utils/v';

const areElementsRegistered = !!customElements.get('sw-datetime-input');

if (!areElementsRegistered) {
    register(
        SwDatetimeInput,
        'sw-datetime-input',
        ['name', 'required', 'placeholder', 'disabled', 'value', 'step', 'showLabel'],
        { shadow: true },
    );
}
