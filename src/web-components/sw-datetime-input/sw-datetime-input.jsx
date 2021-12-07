import { Component } from 'preact';
import style from '../common/sw-input/sw-input.style.css';
import datetimeStyle from './sw-datetime-input.style.css';
import tr from '../../utils/tr';

export default class SwDatetimeInput extends Component {
    dispatchEvent(name) {
        this.ref.getRootNode().host.dispatchEvent(new CustomEvent('update', {
            detail: {
                name,
                value: this.state.value,
                error: this.state?.timeErr || this.state?.dateErr || this.state?.datetimeErr,
            },
            bubbles: true,
        }));
    }

    render({ name, required, placeholder, disabled, value, date, time, step }) {
        const dateVal = dateStringify(value);
        const timeVal = timeStringify(value, date);

        return <>
            <style>{style}</style>
            <style>{datetimeStyle}</style>

            <div className="input-wrapper" ref={node => this.ref = node}>
                <div className="datetime-wrapper">
                    {date && <input
                        id={name + '-date'}
                        type="date"
                        required={required === 'true'}
                        placeholder=" "
                        disabled={disabled !== 'false' && !!disabled}
                        value={this.state.dateVal ?? dateVal}
                        aria-labelledby={placeholder}
                        onBlur={async e => {
                            const {
                                newVal,
                                datetimeErr,
                            } = datetimeToInteger(e.target.value, time, this.state.timeVal ?? timeVal, this);

                            await this.setState({
                                dateVal: e.target.value,
                                timeVal: this.state.timeVal ?? timeVal,
                                dateErr: e.target.validationMessage !== e.target.value && e.target.validationMessage,
                                value: newVal,
                                datetimeErr,
                            });
                            this.dispatchEvent(name);
                        }}
                    />}
                    {time && <input
                        id={name + '-time'}
                        type="time"
                        required={required === 'true'}
                        placeholder=" "
                        disabled={disabled !== 'false' && !!disabled}
                        value={this.state.timeVal ?? timeVal}
                        step={step}
                        aria-labelledby={placeholder}
                        onBlur={async e => {
                            const { newVal, datetimeErr } = date
                                ? datetimeToInteger(this.state.dateVal ?? dateVal, time, e.target.value, this)
                                : timeToInteger(e.target.value);

                            await this.setState({
                                timeVal: e.target.value,
                                dateVal: this.state.dateVal ?? dateVal,
                                timeErr: e.target.validationMessage !== e.target.value && e.target.validationMessage,
                                value: newVal,
                                datetimeErr,
                            });
                            this.dispatchEvent(name);
                        }}
                    />}
                </div>
            </div>
        </>;
    }
}

function dateStringify(intAsStr) {
    if (intAsStr === '') {
        return null;
    }
    const date = new Date(Number(intAsStr));
    const yyyy = String(date.getFullYear()).padStart(4, 0);
    const mm = String(date.getMonth() + 1).padStart(2, 0);
    const dd = String(date.getDate()).padStart(2, 0);
    return [yyyy, mm, dd].join('-');
}

function timeStringify(intAsStr, withDate) {
    if (intAsStr === '') {
        return null;
    }
    const time = new Date(Number(intAsStr));
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
    return { newVal: 1000 * seconds, datetimeErr: '' };
}

function datetimeToInteger(dateString, withTime, timeString) {
    if (!dateString && (!withTime || !timeString)) {
        return { newVal: null, datetimeErr: '' };
    }
    if (withTime && (!dateString || !timeString)) {
        return { newVal: null, datetimeErr: tr('invalid_date_or_hour') };
    }
    const newString = dateString + (timeString ? 'T' + timeString : '');
    return { datetimeErr: '', newVal: new Date(newString).valueOf() };
}
