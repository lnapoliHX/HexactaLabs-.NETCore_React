import React from 'react'
import {
    Input, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap'

const renderField = (props) => {
    const { input, label, type, meta: { touched, error } } = props
    return (
        <div className={`form-group ${touched && ((error ? 'has-error' : 'has-success'))}`}>
            <label className="control-label" htmlFor={input.name}>{label}</label>
            <div>
                <InputGroup>
                    <Input valid={touched && !error} invalid={touched && error} {...input} placeholder={label} type={type} className="form-control" />
                </InputGroup>

                {touched
                    && ((error
                        && <small className="text-danger">{error}</small>
                    ))}
            </div>
        </div >
    )
}

export default renderField;