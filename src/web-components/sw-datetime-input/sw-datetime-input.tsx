import { Component } from 'preact';
// @ts-ignore
import style from '../common/sw-input/sw-input.style.css';
import { tr } from '../../utils/tr';

export default class SwDatetimeInput extends Component {
    dispatchEvent(name: any) {
        ((this as any).ref as any).getRootNode().host.dispatchEvent(new CustomEvent('update', {
            detail: {
                name,
                value: (this.state as any).value as any,
                error: (this.state as any)?.timeErr || (this.state as any)?.dateErr || (this.state as any)?.datetimeErr,
            },
            bubbles: true,
        }));
    }

    render({ name, required, placeholder, disabled, value, date, time, step, showLabel }: any) {
        const dateVal = dateStringify(value);
        const timeVal = timeStringify(value, date);

        return <div className="sw-input sw-datetime-input">
            <style>{style}</style>

            <div className="input-wrapper" ref={(node: any) => (this as any).ref = node}>
                <div className="datetime-wrapper">
                    {date && <input
                        id={date ? name + '-date' : name + '-time'}
                        type="date"
                        required={required === 'true'}
                        placeholder=" "
                        disabled={disabled !== 'false' && !!disabled}
                        value={(this.state as any).dateVal ?? dateVal}
                        aria-labelledby={placeholder}
                        onBlur={async (e: any) => {
                            const {
                                newVal,
                                datetimeErr,
                            } = datetimeToInteger(e.target.value, time, (this.state as any).timeVal ?? timeVal);

                            await this.setState({
                                dateVal: e.target.value,
                                timeVal: (this.state as any).timeVal ?? timeVal,
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
                        value={(this.state as any).timeVal ?? timeVal}
                        step={step}
                        aria-labelledby={placeholder}
                        onBlur={async (e: any) => {
                            const { newVal, datetimeErr } = date
                                ? datetimeToInteger((this.state as any).dateVal ?? dateVal, time, e.target.value)
                                : timeToInteger(e.target.value);

                            await this.setState({
                                timeVal: e.target.value,
                                dateVal: (this.state as any).dateVal ?? dateVal,
                                timeErr: e.target.validationMessage !== e.target.value && e.target.validationMessage,
                                value: newVal,
                                datetimeErr,
                            });
                            this.dispatchEvent(name);
                        }}
                    />}
                </div>
                {showLabel && <label htmlFor={name + '-date'}>{placeholder}</label>}
            </div>
        </div >;
    }
}

function dateStringify(intAsStr: string) {
    if (intAsStr === '') {
        return null;
    }
    const date = new Date(Number(intAsStr));
    const yyyy = String(date.getFullYear()).padStart(4, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return [yyyy, mm, dd].join('-');
}

function timeStringify(intAsStr: any, withDate: any) {
    if (intAsStr === '') {
        return null;
    }
    const time = new Date(Number(intAsStr));
    const arr = [];
    if (withDate) {
        arr.push(String(time.getHours()).padStart(2, '0'));
        arr.push(String(time.getMinutes()).padStart(2, '0'));
        arr.push(String(time.getSeconds()).padStart(2, '0'));
    } else {
        arr.push(String(time.getUTCHours()).padStart(2, '0'));
        arr.push(String(time.getUTCMinutes()).padStart(2, '0'));
        arr.push(String(time.getUTCSeconds()).padStart(2, '0'));
    }
    return arr.join(':');
}

function timeToInteger(timeString: string) {
    let arr: any = timeString.split(':');
    arr = arr.map((val: any) => Number(val));
    const seconds = arr[0] * 60 * 60 + arr[1] * 60 + (arr[2] || 0);
    return { newVal: 1000 * seconds, datetimeErr: '' };
}

function datetimeToInteger(dateString: string, withTime: any, timeString: string) {
    if (!dateString && (!withTime || !timeString)) {
        return { newVal: null, datetimeErr: '' };
    }
    if (withTime && (!dateString || !timeString)) {
        return { newVal: null, datetimeErr: tr('datetime.invalidDateOrHour') };
    }
    const newString = dateString + (timeString ? 'T' + timeString : '');
    return { datetimeErr: '', newVal: new Date(newString).valueOf() };
}
