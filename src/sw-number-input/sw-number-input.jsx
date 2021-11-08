import { Component } from 'preact';
import style from '../common/sw-input/sw-input.style.css';

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
                    value={this.state.value ?? value}
                    min={min && minValue}
                    max={max && maxValue}
                    step={(step) && step === '1' ? 0.1 : step === '2' ? 0.01 : 1}
                    onBlur={async e => {
                        console.log(e.target.validationMessage);
                        await this.setState({
                            errorMessage: e.target.validationMessage !== e.target.value && e.target.validationMessage,
                            value: e.target.value,
                        });

                        if (e.target.validity.valid) {
                            console.log(e.target.value);
                            this.ref.getRootNode().host.dispatchEvent(new CustomEvent('changeEvent',
                                {
                                    detail: { name: name, value: e.target.value },
                                    bubbles: true,
                                },
                            ));
                        }
                    }}
                    aria-labelledby={placeholder}
                />
                <label htmlFor={name}>{placeholder}</label>
            </div>
            {this.state.errorMessage && <p className="error">{this.state.errorMessage}</p>}
        </>;
    }
}
