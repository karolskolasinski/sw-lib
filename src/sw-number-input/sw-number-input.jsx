import { Component } from 'preact';
import style from '../common/sw-input/sw-input.style.css';

let minChild;
let maxChild;
let stepChild;

export default class SwNumberInput extends Component {
    decimalCount(num) {
        const numStr = String(num);
        if (numStr.includes('.')) {
            return numStr.split('.')[1].length;
        }
        return 0;
    }

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
                        const decimalCount = this.decimalCount(e.target.value);
                        if (decimalCount !== 0 && decimalCount !== 1 && decimalCount !== 2 && !this.ref.getRootNode().host.shadowRoot.querySelector(`#${name + step}step`)) {
                            const err = `Please enter a valid value. Correct floating-point number is ${step}.`;
                            const input = this.ref.getRootNode().host.shadowRoot.querySelector('.input-wrapper');

                            const p = document.createElement('p');
                            p.classList.add('error');
                            p.id = `${name + step}step`;
                            p.innerHTML = err;
                            stepChild = p;
                            input.appendChild(p);
                            return;
                        } else if ((decimalCount === 0 || decimalCount === 1 || decimalCount === 2) && stepChild) {
                            const input = this.ref.getRootNode().host.shadowRoot.querySelector('.input-wrapper');
                            input.removeChild(stepChild);
                            stepChild = null;
                        }
                        if (e.target.value < minValue && !this.ref.getRootNode().host.shadowRoot.querySelector(`#${name + min}min`)) {
                            const err = `Value must be grater than or equal to ${min}.`;
                            const input = this.ref.getRootNode().host.shadowRoot.querySelector('.input-wrapper');

                            const p = document.createElement('p');
                            p.classList.add('error');
                            p.id = `${name + min}min`;
                            p.innerHTML = err;
                            minChild = p;
                            input.appendChild(p);
                            return;
                        } else if (e.target.value > maxValue && !this.ref.getRootNode().host.shadowRoot.querySelector(`#${name + max}max`)) {
                            const err = `Value must be less than or equal to ${max}.`;
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
