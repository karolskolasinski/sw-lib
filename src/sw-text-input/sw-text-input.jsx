import { Component } from 'preact';
import style from '../common/sw-input/sw-input.style.css';

export default class SwTextInput extends Component {
    render({ name, required, placeholder, disabled, value }) {
        return <>
            <style>{style}</style>

            <div className="input-wrapper">
                <input ref={node => this.ref = node}
                       id={name}
                       name={name}
                       type="text"
                       required={required === 'true'}
                       placeholder=" "
                       disabled={disabled !== 'false' && !!disabled}
                       value={value}
                       onInput={e => this.ref.getRootNode().host.dispatchEvent(new CustomEvent('changeEvent', {
                               detail: { name: name, value: e.target.value },
                               bubbles: true
                           }
                       ))}
                       aria-labelledby={placeholder}
                />
                <label htmlFor={name}>{placeholder}</label>
            </div>
        </>;
    }
}
