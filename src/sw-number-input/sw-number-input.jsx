import { Component } from 'preact';
import style from '../common/sw-input/sw-input.style.css';

let minChild;
let maxChild;

export default class SwNumberInput extends Component {
    render({ name, required, placeholder, disabled, value, min, max, step }) {
        const minValue = Number.parseInt(min);
        const maxValue = Number.parseInt(max);

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
                    min={min && minValue}
                    max={max && maxValue}
                    step={(step) && step === '1' ? 0.1 : step === '2' ? 0.01 : 1}
                    onInput={e => {
                        if (e.target.value < minValue && !this.ref.getRootNode().host.shadowRoot.querySelector(`#${name + min}min`)) {
                            const err = `Value must be grater than or equal to ${min}`;
                            const input = this.ref.getRootNode().host.shadowRoot.querySelector('.input-wrapper');

                            const p = document.createElement('p');
                            p.classList.add('error');
                            p.id = `${name + min}min`;
                            p.innerHTML = err;
                            minChild = p;
                            input.appendChild(p);
                            return;
                        } else if (e.target.value > maxValue && !this.ref.getRootNode().host.shadowRoot.querySelector(`#${name + max}max`)) {
                            const err = `Value must be less than or equal to ${max}`;
                            const input = this.ref.getRootNode().host.shadowRoot.querySelector('.input-wrapper');

                            const p = document.createElement('p');
                            p.classList.add('error');
                            p.id = `${name + max} max`;
                            p.innerHTML = err;
                            maxChild = p;
                            input.appendChild(p);
                            return;
                        } else if (e.target.value >= minValue && minChild) {
                            const input = this.ref.getRootNode().host.shadowRoot.querySelector('.input-wrapper');
                            input.removeChild(minChild);
                            minChild = null;
                        } else if (e.target.value <= maxValue && maxChild) {
                            const input = this.ref.getRootNode().host.shadowRoot.querySelector('.input-wrapper');
                            input.removeChild(maxChild);
                            maxChild = null;
                        }

                        this.ref.getRootNode().host.dispatchEvent(new CustomEvent('changeEvent',
                            {
                                detail: { name: name, value: e.target.value },
                                bubbles: true,
                            },
                        ));
                    }}
                    aria-labelledby={placeholder}
                />
                <label htmlFor={name}>{placeholder}</label>
            </div>
        </>;
    }
}
