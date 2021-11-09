import { Component } from 'preact';
import style from './sw-datetime-input.style.css';

export default class SwDatetimeInput extends Component {
    render({ name, required, placeholder, disabled, value, date, time, step }) {
        let dateVal = dateStringify(value);
        let timeVal = timeStringify(value, date);
        return <>
            <style>{style}</style>

            <div className="input-wrapper" ref={node => this.ref = node}>
                {date && <input
                    id={name+ ".date"} 
                    type="date"
                    required={required === 'true'}
                    placeholder=" "
                    disabled={disabled !== 'false' && !!disabled}
                    value={dateVal}
                    aria-labelledby={placeholder}
                    onBlur={e => {
                        const newVal = datetimeToInteger(e.target.value, time && timeVal)
                        dateVal = e.target.value;
                        this.value = newVal;
                        return this.ref.getRootNode().host.dispatchEvent(new CustomEvent('changeEvent', {
                            detail: { name: name, value: this.value },
                            bubbles: true
                        }));
                    }}
                    />}
                {time && <input 
                    id={name+".time"}
                    type="time"
                    required={required === 'true'}
                    placeholder=" "
                    disabled={disabled !== 'false' && !!disabled}
                    value={timeVal}
                    step={step}
                    aria-labelledby={placeholder}
                    onBlur={e => {
                        const newVal = date ? datetimeToInteger(dateVal, time && e.target.value) : timeToInteger(e.target.value);
                        timeVal = e.target.value;
                        this.value = newVal;
                        return this.ref.getRootNode().host.dispatchEvent(new CustomEvent('changeEvent', {
                            detail: { name: name, value: this.value },
                            bubbles: true
                        }));
                    }}
                />}
                <label htmlFor={name}>{placeholder}</label>
            </div>
        </>;
    }
}

function dateStringify(int) {
    if (int === '') {
        return
    }
    const date = new Date(Number(int));
    const yyyy = String(date.getFullYear()).padStart(4,0);
    const mm = String(date.getMonth()+1).padStart(2, 0);
    const dd = String(date.getDate()).padStart(2, 0);
    return [yyyy, mm, dd].join('-');
}

function timeStringify(int, withDate) {
    if (int === '') {
        return
    }
    const time = new Date(Number(int));
    const arr = []
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

function datetimeToInteger(dateString, timeString) {
    const newString = dateString + (timeString ? 'T' + timeString : '');
    return new Date(newString).valueOf();
}