import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form'

import { load, create, goBack } from '../index';
import Spinner from '../../../../components/loading/spinner'
import validator  from '../../../../common/helpers/YupValidator'


import Form from '../../form/Form'
import schema from '../../form/Validation';

class CreatePage extends React.Component {

    componentWillMount() {
        this.props.load(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (this.props.pristine && !prevProps.pristine) {
            debugger;
        }
    }

    render() {
        return (
            <Spinner loading={this.props.loading}>
                <CreateForm
                    {...this.props}
                    title="Crear"
                    initialValues={this.props.element}
                    onSubmit={(values) => { this.props.create(values); }}
                />
            </Spinner>
        )
    }
}

const CreateForm = reduxForm({
    form: 'provider/create',  // a unique identifier for this form
    validate: validator(schema),
    enableReinitialize: true
})(Form)

const selector = formValueSelector('element/update');

const mapStateToProps = ({ provider: element, ...state }) => ({
    element: element.create.element,
    loading: element.create.loading,
    error: element.create.error,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        load,
        create,
        goBack,
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)