import React from "react";
import { connect } from "react-redux";

import ElementRemove from "../presentation/ElementRemove";
import { load, remove, goBack } from "../index";
import Spinner from "../../../../components/loading/spinner";

import PropTypes from "prop-types";

class ElementRemovePage extends React.Component {
  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }

  render() {
    return (
      <Spinner loading={this.props.loading}>
        <ElementRemove {...this.props} />
      </Spinner>
    );
  }
}

ElementRemovePage.propTypes = {
  load: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

const mapStateToProps = ({ provider: element }) => ({
  element: element.remove.element,
  loading: element.remove.loading,
  error: element.remove.error,
  isOpen: element.remove.isOpen
});

const mapDispatchToProps = { load, remove, goBack };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ElementRemovePage);
