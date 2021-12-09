import { Component } from 'preact';
import style from '../common/sw-input/sw-input.style.css';

export default class SwTextInput extends Component {
    render({ name, required, placeholder, disabled, value, min, max, showLabel = true }) {
        const minValue = Number.parseInt(min);
        const maxValue = Number.parseInt(max);

        return <div className="sw-input sw-text-input">
            <style>{style}</style>
            <div className="input-wrapper" ref={node => this.ref = node}>
                <input id={name}
                    name={name}
                    type="text"
                    required={required === 'true'}
                    placeholder=" "
                    disabled={disabled !== 'false' && !!disabled}
                    value={this.state.value ?? value}
                    min={min && minValue}
                    max={max && maxValue}
                    aria-labelledby={placeholder}
                    onInput={async e => {
                        await this.setState({
                            errorMessage: e.target.validationMessage !== e.target.value && e.target.validationMessage,
                            value: e.target.value,
                        });

                        this.ref.getRootNode().host.dispatchEvent(new CustomEvent('update',
                            {
                                detail: { name: name, value: e.target.value, error: this.state.validationMessage },
                                bubbles: true,
                            },
                        ));
                    }}
                />

                { showLabel && <label htmlFor={name}>{placeholder}</label>}
            </div>
        </div>;
    }
}
