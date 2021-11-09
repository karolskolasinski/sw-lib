import register from 'preact-custom-element';
import SwButton from './sw-button/sw-button.jsx';
import SwTextInput from './sw-text-input/sw-text-input.jsx';
import SwDatetimeInput from './sw-datetime-input/sw-datetime-input.jsx';
import SwLoader from './sw-loader/sw-loader.jsx';
import SwPagination from './sw-pagination/sw-pagination.jsx';
import SwTable from './sw-table/sw-table.jsx';

export * from './sw-utils/sw-flash-message/sw-flash-message.jsx';
export * from './sw-utils/sw-modal/sw-modal.jsx';

register(SwButton, 'sw-button', ['icon', 'disabled'], { shadow: true });
register(SwTextInput, 'sw-text-input', ['name', 'required', 'placeholder', 'disabled', 'value'], { shadow: true });
register(SwDatetimeInput, 'sw-datetime-input', ['name', 'required', 'placeholder', 'disabled', 'value', 'step'], { shadow: true });
register(SwLoader, 'sw-loader', [], { shadow: true });
register(SwPagination, 'sw-pagination', ['current-page', 'number-of-pages'], { shadow: true });
register(SwTable, 'sw-table', ['config'], { shadow: true });
