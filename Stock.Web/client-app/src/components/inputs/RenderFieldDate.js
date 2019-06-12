import React from 'react';
import { Label, Input, FormFeedback } from 'reactstrap';
import { DatePicker, DateTimePicker } from 'react-widgets'
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';

Moment.locale('es')
momentLocalizer()

const RenderFieldUpdate = (props) => {
    const { showTime, input,
        input: { name, value, onChange },
        label, placeholder, type,
        meta: { error, touched, pristine } } = props;

    let className = ""
    if (touched && !error) {
        className = "border border-success"
    } else if (touched && error) {
        className = "border border-danger"
    }
    return (
        <div className="px-0 py-0">
            {label && <Label for={name}>{label}</Label>}
            <div className={className}>
                <DateTimePicker
                    // {...input}

                    onChange={onChange}
                    format="DD MM YYYY"
                    time={showTime}
                    value={!value ? null : new Date(value)}
                />
            </div>
            {touched
                && ((error
                    && <small className="text-danger">{error}</small>
                ))}
        </div>
    )
}

export default RenderFieldUpdate;