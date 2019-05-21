import React, { Fragment } from 'react';
import {
    Input
} from 'reactstrap';



const mapToChildren = (options) => options.map((x, i) => (
<option key={i} {...x}>{x.label}</option>))

const renderField = (props) => {
    const { input, label, type, options, meta: { touched, error } } = props;
    return (
        <Fragment>
            <div className={`form-group ${touched && ((error ? 'has-error' : 'has-success'))}`}>
                <label className="control-label" htmlFor={input.name}>{label}</label>
                <div>
                    <div >
                        <Input valid={touched && !error} invalid={touched && error} {...input} {...props}>
                            <option key={1} selected value="0">DNI</option>
                            <option key={2} value="1">Pasaporte</option>
                        </Input>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default renderField;