import register from 'preact-custom-element';
import SwButton from './sw-button/sw-button.jsx';
import SwNumberInput from './sw-number-input/sw-number-input.jsx';
import SwTextInput from './sw-text-input/sw-text-input.jsx';
import SwLoader from './sw-loader/sw-loader.jsx';
import SwPagination from './sw-pagination/sw-pagination.jsx';
import SwTable from './sw-table/sw-table.jsx';

export * from './sw-utils/sw-flash-message/sw-flash-message.jsx';

register(SwButton, 'sw-button', ['icon', 'disabled'], { shadow: true });
register(SwNumberInput, 'sw-number-input',
    ['name', 'required', 'placeholder', 'disabled', 'value', 'min', 'max', 'step'],
    { shadow: true });
register(SwTextInput, 'sw-text-input', ['name', 'required', 'placeholder', 'disabled', 'value'], { shadow: true });
register(SwLoader, 'sw-loader', [], { shadow: true });
register(SwPagination, 'sw-pagination', ['current-page', 'number-of-pages'], { shadow: true });
register(SwTable, 'sw-table', ['config'], { shadow: true });
