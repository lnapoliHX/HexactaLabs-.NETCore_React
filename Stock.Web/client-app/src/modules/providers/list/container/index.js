import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProviders } from "../index";
import Presentation from "../presentation";

class ProvidersPage extends React.Component {
  render() {
    return (
      <Presentation
        data={this.props.providers}
        dataLoading={this.props.loading}
        defaultPageSize={5}
        {...this.props}
      />
    );
  }
}

ProvidersPage.propTypes = {
  providers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getProviders: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { providers: getProviders(state) };
};

const mapDispatchToProps = {
  getProviders
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProvidersPage);
