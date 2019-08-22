import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import PropTypes from "prop-types";
import { getProviders, getAll } from "../index";
import Presentation from "../presentation";

class ProvidersPage extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: {
        id: "",
        name: "",
        email: "",
        phone: ""
      }
    };
  }

  submitFilters = event => {
    event.preventDefault();
    this.props.getAll(this.state.filters);
  };

  filterChanged = event => {
    const newFilters = {
      ...this.state.filters,
      [event.target.name]: event.target.value
    };
    this.setState({ filters: newFilters });
  };

  render() {
    return (
      <Presentation
        data={this.props.providers}
        dataLoading={this.props.loading}
        defaultPageSize={5}
        filters={this.state.filters}
        handleFilter={this.filterChanged}
        submitFilter={this.submitFilters}
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
  getProviders,
  getAll,
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProvidersPage);
