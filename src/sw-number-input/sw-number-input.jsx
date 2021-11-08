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
                    onInput={async e => {
                        const decimalCount = this.decimalCount(e.target.value);
                        if (decimalCount !== 0 && decimalCount !== 1 && decimalCount !== 2) {
                            await this.setState({
                                stepError: `${e.target.value} is not valid. Correct floating-point number is ${step}.`,
                                value: e.target.value,
                            });
                        }

                        if (e.target.value < minValue) {
                            await this.setState({
                                minError: `Value must be grater than or equal to ${min}.`,
                                value: e.target.value,
                            });
                        }

                        if (e.target.value > maxValue) {
                            await this.setState({
                                maxError: `Value must be less than or equal to ${max}.`,
                                value: e.target.value,
                            });
                        }

                        if (decimalCount === 0 || decimalCount === 1 || decimalCount === 2) {
                            await this.setState({ stepError: null, value: e.target.value });
                        }

                        if (e.target.value >= minValue) {
                            await this.setState({ minError: null, value: e.target.value });
                        }

                        if (e.target.value <= maxValue) {
                            await this.setState({ maxError: null, value: e.target.value });
                        }

                        if (!this.state.stepError && !this.state.minError && !this.state.maxError) {
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
                {this.state.stepError && <p className="error">{this.state.stepError}</p>}
                {this.state.minError && <p className="error">{this.state.minError}</p>}
                {this.state.maxError && <p className="error">{this.state.maxError}</p>}
            </div>
        </>;
    }
}
