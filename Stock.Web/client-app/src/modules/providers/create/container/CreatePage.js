import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { load, create, goBack } from "../index";
import Spinner from "../../../../components/loading/spinner";
import validator from "../../../../common/helpers/YupValidator";

import Form from "../../form/Form";
import schema from "../../form/Validation";

import PropTypes from "prop-types";

class CreatePage extends React.Component {
  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.pristine && !prevProps.pristine) {
      //eslint-disable-next-line no-debugger
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
          onSubmit={values => {
            this.props.create(values);
          }}
        />
      </Spinner>
    );
  }
}

CreatePage.propTypes = {
  create: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  load: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  match: PropTypes.object.isRequired,
  element: PropTypes.object.isRequired
};

const CreateForm = reduxForm({
  form: "provider/create", // a unique identifier for this form
  validate: validator(schema),
  enableReinitialize: true
})(Form);

const mapStateToProps = ({ provider: element }) => ({
  element: element.create.element,
  loading: element.create.loading,
  error: element.create.error
});

const mapDispatchToProps = {
  load,
  create,
  goBack
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePage);
