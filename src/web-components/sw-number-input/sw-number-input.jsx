import { Component } from 'preact';
import style from '../common/sw-input/sw-input.style.css';

export default class SwNumberInput extends Component {
    render({ name, required, placeholder, disabled, value, min, max, step, showLabel = true }) {
        const minValue = Number.parseInt(min);
        const maxValue = Number.parseInt(max);

        return <div className="sw-input sw-number-input">
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
                    step={step && Number(step)}
                    aria-labelledby={placeholder}
                    onBlur={async e => {
                        await this.setState({
                            errorMessage: e.target.validationMessage !== e.target.value && e.target.validationMessage,
                            value: e.target.value,
                        });

                        if (e.target.validity.valid) {
                            this.ref.getRootNode().host.dispatchEvent(new CustomEvent('update',
                                {
                                    detail: { name: name, value: e.target.value, error: this.state.validationMessage },
                                    bubbles: true,
                                },
                            ));
                        }
                    }} />

                {showLabel && <label htmlFor={name}>{placeholder}</label>}
            </div>
        </div>;
    }
}
