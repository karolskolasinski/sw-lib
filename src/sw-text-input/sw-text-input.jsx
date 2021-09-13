import { Component } from 'preact';
import style from './sw-text-input.style.css';

export default class SwTextInput extends Component {
    render({ name, required, placeholder }) {
        return <>
            <style>{style}</style>

            <input id={name}
                   name={name}
                   type="text"
                   required={required === 'true'}
                   placeholder=" "
                   aria-labelledby={placeholder}
            />
            <label htmlFor={name}>{placeholder}</label>
        </>;
    }
}
