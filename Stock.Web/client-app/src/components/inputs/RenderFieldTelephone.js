import React from 'react'
import {
    Input, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap'
import InputMask from 'react-input-mask';

const renderField = (props) => {
    const { input, label, type, meta: { touched, error } } = props
    return (
        <div className={`form-group ${touched && ((error ? 'has-error' : 'has-success'))}`}>
            <label className="control-label" htmlFor={input.name}>{label}</label>
            <div>
                <InputGroup>
                    <InputMask mask="(999) 999-999" maskChar="A" {...input} placeholder={label} type={type} className="form-control"/>
                    
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