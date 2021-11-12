import { Component } from 'preact';
import style from '../common/sw-input/sw-input.style.css';

export default class SwNumberInput extends Component {
    render({ name, required, placeholder, disabled, value, min, max, step }) {
        const minValue = Number.parseInt(min);
        const maxValue = Number.parseInt(max);

        return <div className="input-wrapper" ref={node => this.ref = node}>
            <style>{style}</style>
            <input id={name}
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
                    await this.setState({
                        errorMessage: e.target.validationMessage !== e.target.value && e.target.validationMessage,
                        value: e.target.value,
                    });

                    if (e.target.validity.valid) {
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

            {this.state.errorMessage && <p className="error">{this.state.errorMessage}</p>}
        </div>;
    }
}
