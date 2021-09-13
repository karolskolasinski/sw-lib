import { Component } from 'preact';
import style from './sw-button.style.css';

export default class SwButton extends Component {
    render({ icon, disabled }) {
        const child = this.props.children.props.children;

        // todo: add an icon, replace the input with a button
        // I think the only option is to go with the button solution. If we would have to do some special work for form submision then we will implement it in javascript inside the button so we should be fine here.
        return <>
            <style>{style}</style>

            <button type="button"
                    role="button"
                    disabled={disabled === 'true'}>{child}
            </button>
        </>;
    }
}
