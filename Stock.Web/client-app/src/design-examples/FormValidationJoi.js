import React from 'react'
import * as Joi from 'joi';
import Validator from '../helpers/JoiValidator'
import { Field, FormSection, reduxForm } from 'redux-form'
import renderField from '../modules/common/inputs/RenderField'

const AsyncValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field label="name" name="firstName" component={renderField} type="text" />
            <Field name="lastName" component={renderField} type="text" />
            <Field name="email" component={renderField} type="text" />
            <FormSection name="address">
                <Field name="street" component={renderField} type="text" />
                <Field name="city" component={renderField} type="text" />
                <Field name="state" component={renderField} type="text" />
                <Field name="zip" component={renderField} type="text" />
            </FormSection>
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

const schema = Joi.object()
    .keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        address: Joi.object().keys({
            street: Joi.string().required(),
            city: Joi.string().required(),
            state: Joi.string().required().min(2).max(2),
            zip: Joi.number().min(2),
        })
    });

export default reduxForm({
    form: 'asyncValidation',  // a unique identifier for this form
    validate: Validator(schema)
})(AsyncValidationForm)