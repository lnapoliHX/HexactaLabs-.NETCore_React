import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form'

import { load, update, goBack } from '../index';
import Spinner from '../../../../components/loading/Spinner'

import Form from '../../form/Form'
import schema from '../../form/Validation';
import validator  from '../../../../common/helpers/YupValidator'


class EditPage extends React.Component {

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
                    title="Editar"
                    initialValues={this.props.element}
                    onSubmit={(values) => { this.props.update(values); }}
                />
            </Spinner>
        )
    }
}

const CreateForm = reduxForm({
    form: 'provider/update',  // a unique identifier for this form
    validate: validator(schema),
    enableReinitialize: true
})(Form)

const selector = formValueSelector('element/update');

const mapStateToProps = ({ provider: element, ...state }) => ({
    element: element.update.element,
    loading: element.update.loading,
    error: element.update.error,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        load,
        update,
        goBack,
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)