import { Component } from 'preact';
import style from './sw-datetime-input.style.css';

export default class SwDatetimeInput extends Component {
    render({ name, required, placeholder, disabled, value, date, time, step }) {
        this.dateVal = dateStringify(value);
        this.timeVal = timeStringify(value, date);
        const that = this;
        return <>
            <style>{style}</style>

            <div className="input-wrapper" ref={node => this.ref = node} customProp>
                {date && <input
                    id={name+ ".date"} 
                    type="date"
                    required={required === 'true'}
                    placeholder=" "
                    disabled={(disabled===true || disabled ==='true') && true}
                    value={this.dateVal}
                    aria-labelledby={placeholder}
                    onInput={e => {
                        const newVal = datetimeToInteger(e.target.value, time && this.timeVal)
                        if (!isNaN(newVal)) {
                            this.dateVal = e.target.value;
                            this.value = newVal;
                            return this.ref.getRootNode().host.dispatchEvent(new CustomEvent('changeEvent', {
                                detail: { name: name, value: this.value },
                                bubbles: true
                            }));
                        }
                    }}
                    />}
                {time && <input 
                    id={name+".time"}
                    type="time"
                    required={required === 'true'}
                    placeholder=" "
                    disabled={(disabled===true || disabled ==='true')&& true}
                    value={this.timeVal}
                    step={step}
                    aria-labelledby={placeholder}
                    onInput={e => {
                        const newVal = date ? datetimeToInteger(this.dateVal, time && e.target.value) : timeToInteger(e.target.value);
                        if (!isNaN(newVal)) {
                            this.timeVal = e.target.value;
                            this.value = newVal;
                            return this.ref.getRootNode().host.dispatchEvent(new CustomEvent('changeEvent', {
                                detail: { name: name, value: this.value },
                                bubbles: true
                            }));
                        }
                    }}
                />}
                <label htmlFor={name}>{placeholder}</label>
            </div>
        </>;
    }
}



function dateStringify(int) {
    const date = new Date(Number(int));
    const yyyy = String(date.getFullYear()).padStart(4,0);
    const mm = String(date.getMonth()+1).padStart(2, 0);
    const dd = String(date.getDate()).padStart(2, 0);
    return [yyyy, mm, dd].join('-');
}

function timeStringify(int, withDate) {
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
    arr = arr.map(val => Number(val || 0));
    const seconds = arr[0] * 60 * 60 + arr[1] * 60 + (arr[2] || 0);
    return 1000 * seconds;
}

function normalizeDateString(dateString) {
    try {
        let arr = dateString.split('-');
        arr[0] = arr[0].padStart(4, 0);
        arr[1] = arr[1].padStart(2, 0);
        arr[2] = arr[2].padStart(2, 0);
        return arr.join('-');
    } catch {
        return ''
    }
}

function datetimeToInteger(dateString, timeString) {
    const newString = normalizeDateString(dateString) + (timeString ? 'T' + timeString : '');
    return new Date(newString).valueOf();
}