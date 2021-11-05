import { Component } from 'preact';
import style from './sw-button.style.css';

export default class SwButton extends Component {
    render({ icon, disabled }) {
        const child = this.props.children.props.children;

        // todo: add an icon
        return <>
            <style>{style}</style>

            <button type="button"
                role="button"
                disabled={disabled !== 'false' && !!disabled}>{child}
            </button>
        </>;
    }
}
