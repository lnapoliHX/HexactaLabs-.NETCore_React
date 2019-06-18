import React from 'react';
import { Input, Label, FormFeedback } from 'reactstrap';

const RenderSelectableField = props => {
    const { 
        multiple, 
        input, 
        label, 
        type, 
        options, 
        meta: { touched, error, pristine} 
    } = props;

    return (
        <div className="px-0 py-0">
            <Label for={input.name}>{label}</Label>
            <Input {...input}
                valid={touched && !error && !pristine} 
                invalid={touched && error}
                name={input.name}
                id={input.name}
                type={type || 'select'}
                multiple={multiple}
            >
                {options.map((each, index) => 
                    <option key={index} {...each}>
                        {each.label}
                    </option>)} 
            </Input>
            <FormFeedback>{error}</FormFeedback>
        </div>
    )
}

export default RenderSelectableField;