import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { load, update, goBack } from "../index";
import Spinner from "../../../../components/loading/spinner";

import Form from "../../form/Form";
import schema from "../../form/Validation";
import validator from "../../../../common/helpers/YupValidator";
import PropTypes from "prop-types";

class EditPage extends React.Component {
  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.pristine && !prevProps.pristine) {
      // eslint-disable-next-line no-debugger
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
          onSubmit={values => {
            this.props.update(values);
          }}
        />
      </Spinner>
    );
  }
}

EditPage.propTypes = {
  load: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  pristine: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  element: PropTypes.object,
  update: PropTypes.func.isRequired
};

const CreateForm = reduxForm({
  form: "provider/update", // a unique identifier for this form
  validate: validator(schema),
  enableReinitialize: true
})(Form);

const mapStateToProps = ({ provider: element }) => ({
  element: element.update.element,
  loading: element.update.loading,
  error: element.update.error
});

const mapDispatchToProps = {
  load,
  update,
  goBack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
