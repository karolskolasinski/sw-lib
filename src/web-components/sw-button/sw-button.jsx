import { Component } from 'preact';
import style from './sw-button.style.css';

// todo: add an icon
export default class SwButton extends Component {
    render({ icon, disabled, href, children }) {
        const isDisabled = disabled !== 'false' && !!disabled;

        return <>
            <style>{style}</style>

            {!isDisabled && href
                ? <a className="button"
                    href={href}>{children}
                </a>
                : <button className="button"
                    type="button"
                    role="button"
                    disabled={isDisabled}>{children}
                </button>
            }
        </>;
    }
}
