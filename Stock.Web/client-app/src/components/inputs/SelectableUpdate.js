import React from 'react';
import {
    Input, Label
} from 'reactstrap';

const mapToChildren = (options) => options.map((each, index) => <option key={index} {...each}>{each.label}</option>)

const RenderSelectableField = (props) => {
    const { input, input: {name}, label, type, options, meta: { touched, error } } = props;
    return (
        <div className="px-0 py-0">
            <Label for={input.name}>{label}</Label>
            <Input {...input} name={ name } id={ name } type={type}>
                {mapToChildren(options)}
            </Input>
        </div>
    )
}

export default RenderSelectableField;