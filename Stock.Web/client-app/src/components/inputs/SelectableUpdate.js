import React from 'react';
import {
    Input, Label, FormFeedback
} from 'reactstrap';

const mapToChildren = (options) => options.map((each, index) => <option key={index} {...each}>{each.label}</option>)

const RenderSelectableField = (props) => {
    const { multiple, input, input: { name }, label, type, options, meta: { touched, error, pristine} } = props;
    return (
        <div className="px-0 py-0">
            <Label for={input.name}>{label}</Label>
            <Input {...input}
                valid={touched && !error && !pristine} invalid={touched && error}
                name={name}
                id={name}
                type={type || 'select'}
                multiple={multiple} >
                {mapToChildren(options)}
            </Input>
            <FormFeedback>{error}</FormFeedback>
        </div>
    )
}

export default RenderSelectableField;