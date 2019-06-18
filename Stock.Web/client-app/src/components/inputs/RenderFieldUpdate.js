import React from 'react';
import { Label, Input, FormFeedback } from 'reactstrap';

const RenderFieldUpdate = props => {
    const { 
        input,
        label, 
        placeholder, 
        type, 
        meta: { error, touched, pristine }
    } = props;
    
    return (
        <div className="px-0 py-0">
            {label && <Label for={input.name}>{label}</Label>}
            <Input 
                valid={touched && !error && !pristine} 
                invalid={touched && error} 
                {...input} 
                id={input.name} 
                placeholder={placeholder} 
                type={type} 
            />
            <FormFeedback>{error}</FormFeedback>
        </div>
    )
}

export default RenderFieldUpdate;