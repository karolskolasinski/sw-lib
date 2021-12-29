import { v } from '../../utils/v';
import * as stm from '../../utils/state-mgr/state-mgr';
// @ts-ignore
import style from './sw-loader.css';

stm.component({
    tagName: 'sw-loader',
    shadow: true,
    init: () => [{}, null],
    update: () => [{}, null],
    view: () => v<any>('.sw-loader',
        v.style(style),
        v('.loader-box',
            v('.loader', v.div(), v.div(), v.div()))
    )
});
