import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import List from "../list/container";
import { getLoading, getAll } from "../list";
import Spinner from "../../../components/loading/spinner";

export class Page extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const urls = {
      view: `${this.props.match.url}/view/:id`,
      create: `${this.props.match.url}/create`,
      edit: `${this.props.match.url}/update/:id`,
      remove: `${this.props.match.url}/remove/:id`
    };

    return (
      <Spinner loading={this.props.loading}>
        <Switch>
          <Route
            render={() => <List urls={urls} loading={this.props.loading} />}
          />
        </Switch>
      </Spinner>
    );
  }
}

Page.propTypes = {
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getAll: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { loading: getLoading(state) };
};

const mapDispatchToProps = {
  getAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
