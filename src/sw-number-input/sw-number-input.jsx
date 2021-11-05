import { Component } from 'preact';
import style from '../common/sw-input/sw-input.style.css';

export default class SwNumberInput extends Component {
    render({ name, required, placeholder, disabled, value, min, max, step }) {
        return <>
            <style>{style}</style>
            <div className="input-wrapper">
                <input ref={node => this.ref = node}
                    id={name}
                    name={name}
                    type="number"
                    required={required === 'true'}
                    placeholder=" "
                    disabled={disabled !== 'false' && !!disabled}
                    value={value}
                    min={min && min}
                    max={max && max}
                    step={(step) && step === '1' ? 0.1 : step === '2' ? 0.01 : 1}
                    onInput={e => this.ref.getRootNode().host.dispatchEvent(new CustomEvent('changeEvent',
                        {
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
