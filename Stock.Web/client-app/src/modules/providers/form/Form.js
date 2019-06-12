import React from 'react'
import { Field } from 'redux-form';
import { Row, FormGroup } from 'reactstrap'

import FormToolbar from './Toolbar';

import RenderField from '../../../components/inputs/RenderFieldUpdate'


export default props => {
    const {
        handleSubmit,
        title,
    } = props
    return (
        <div>
            <h5> {title} </h5>
            <div>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <FormGroup className="col-6">
                            <Field label="Nombre" name="name"
                                placeholder="Nombre"
                                component={RenderField}
                                type="text" />
                            <Field label="email"
                                name="email"
                                placeholder="Marca"
                                component={RenderField}
                                type="text" />
                            <Field label="telefono" name="phone"
                                placeholder="xxx-xxxx"
                                component={RenderField}
                                type="text" />
                        </FormGroup>
                    </Row>
                    <FormToolbar {...props} />
                </form>
            </div>
        </div>
    )
}