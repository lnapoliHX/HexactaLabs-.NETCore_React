import React from 'react'
import styles from './Login.css'
import { Row, FormGroup, } from 'reactstrap';

import Validator from '../../../common/helpers/YupValidator'
import RenderField from '../../../components/inputs/RenderFieldUpdate';
import schema from '../schema';
import { reduxForm, Field } from 'redux-form'


class CreateForm extends React.Component {
    errorMessage() {
        if (this.props.errorMessage) {
            return (
                <div className="text-danger">
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div>
                <form className="form-signin" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Field
                            name="username"
                            placeholder="Nombre de usuario"
                            component={RenderField}
                            type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Field
                            name="password"
                            placeholder="Contraseña"
                            component={RenderField}
                            type="password" />
                    </FormGroup>
                    <button
                        disabled={submitting}
                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                        type="submit"
                        onClick={handleSubmit(values => this.props.onSubmit({ ...values, button: 'login' }))}
                    >Sign in</button>
                    <button
                        disabled={submitting}
                        type="submit"
                        className="btn btn-lg btn-secondary btn-block btn-login text-uppercase font-weight-bold mb-2"
                        onClick={handleSubmit(values => this.props.onSubmit({ ...values, button: 'signup' }))}
                    >Sign up</button>
                    {/* <button type="submit" disabled={submitting} className="btn btn-primary">Iniciar sesión</button> */}
                </form>
                {this.errorMessage()}
            </div>)
    }
}

const Create = (props) => (
    <div className="container-fluid">
        <div className="row no-gutter">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-lg-8 mx-auto">
                                <h3 className="login-heading mb-4">Bienvenido</h3>
                                <CreateForm {...props} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default reduxForm({
    form: 'auth/login',  // a unique identifier for this form
    validate: Validator(schema)
})(Create)

