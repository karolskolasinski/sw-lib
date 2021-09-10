import register from 'preact-custom-element';
import SwButton from "./sw-button/sw-button.jsx";
import SwLoader from "./sw-loader/sw-loader.jsx";
import SwTable from "./sw-table/sw-table.jsx";

register(SwButton, 'sw-button', [], { shadow: true });
register(SwLoader, 'sw-loader', [], { shadow: true });
register(SwTable, 'sw-table', ['source', 'fields'], { shadow: true });
