import { Component } from 'preact';
import style from './sw-text-input.style.css';

export default class SwTextInput extends Component {
    render({ required, name, placeholder }) {
        return <>
            <style>{style}</style>

            <input id={name}
                   name={name}
                   type="text"
                   placeholder=" "
                   required={required === 'true'}
                   aria-labelledby={placeholder}
            />
            <label htmlFor={name}>{placeholder}</label>
        </>;
    }
}
