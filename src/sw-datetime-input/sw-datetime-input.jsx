import { Component } from 'preact';
import style from '../common/sw-input/sw-input.style.css';

export default class SwDatetimeInput extends Component {
    render({ name, required, placeholder, disabled, value, date, time, step }) {
        const dateVal = dateStringify(value);
        const timeVal = timeStringify(value, date);
        return <>
            <style>{style}</style>

            <div className="input-wrapper" ref={node => this.ref = node}>
                {date && <input
                    id={name + '.date'}
                    type="date"
                    required={required === 'true'}
                    placeholder=" "
                    disabled={disabled !== 'false' && !!disabled}
                    value={this.state.dateVal ?? dateVal}
                    aria-labelledby={placeholder}
                    onBlur={async e => {
                        const newVal = datetimeToInteger(e.target.value, time, this.state.timeVal);
                        await this.setState({
                            dateVal: e.target.value,
                            value: newVal,
                            errorMessage: e.target.validationMessage !== e.target.value && e.target.validationMessage,
                        });
                        if (e.target.validity.valid) {
                            this.ref.getRootNode().host.dispatchEvent(new CustomEvent('changeEvent', {
                                detail: { name: name, value: this.state.value },
                                bubbles: true
                            }));
                        }
                    }}
                />}
                {time && <input
                    id={name + '.time'}
                    type="time"
                    required={required === 'true'}
                    placeholder=" "
                    disabled={disabled !== 'false' && !!disabled}
                    value={this.state.timeVal ?? timeVal}
                    step={step}
                    aria-labelledby={placeholder}
                    onBlur={async e => {
                        const newVal = date ?
                            datetimeToInteger(this.state.dateVal, time, e.target.value) :
                            timeToInteger(e.target.value);
                        await this.setState({
                            timeVal: e.target.value,
                            value: newVal,
                            errorMessage: e.target.validationMessage !== e.target.value && e.target.validationMessage,
                        });
                        if (e.target.validity.valid) {
                            this.ref.getRootNode().host.dispatchEvent(new CustomEvent('changeEvent', {
                                detail: { name: name, value: this.state.value },
                                bubbles: true
                            }));
                        }
                    }}
                />}
                <label htmlFor={name}>{placeholder}</label>
                {this.state.errorMessage && <p className="error">{this.state.errorMessage}</p>}
                {date && time && !(this.state.dateVal ?? dateVal) && (this.state.timeVal ?? timeVal)
                    && <p className="error">Podaj datę</p>}
                {date && time && (this.state.dateVal ?? dateVal) && !(this.state.timeVal ?? timeVal)
                    && <p className="error">Podaj godzinę</p>}
            </div>
        </>;
    }
}

function dateStringify(int) {
    if (int === '') {
        return;
    }
    const date = new Date(Number(int));
    const yyyy = String(date.getFullYear()).padStart(4, 0);
    const mm = String(date.getMonth() + 1).padStart(2, 0);
    const dd = String(date.getDate()).padStart(2, 0);
    return [yyyy, mm, dd].join('-');
}

function timeStringify(int, withDate) {
    if (int === '') {
        return;
    }
    const time = new Date(Number(int));
    const arr = [];
    if (withDate) {
        arr.push(String(time.getHours()).padStart(2, 0));
        arr.push(String(time.getMinutes()).padStart(2, 0));
        arr.push(String(time.getSeconds()).padStart(2, 0));
    } else {
        arr.push(String(time.getUTCHours()).padStart(2, 0));
        arr.push(String(time.getUTCMinutes()).padStart(2, 0));
        arr.push(String(time.getUTCSeconds()).padStart(2, 0));
    }
    return arr.join(':');
}

function timeToInteger(timeString) {
    let arr = timeString.split(':');
    arr = arr.map(val => Number(val));
    const seconds = arr[0] * 60 * 60 + arr[1] * 60 + (arr[2] || 0);
    return 1000 * seconds;
}

function datetimeToInteger(dateString, withTime, timeString) {
    if (withTime && !timeString) {
        return null;
    }
    const newString = dateString + (timeString ? 'T' + timeString : '');
    return new Date(newString).valueOf();
}
