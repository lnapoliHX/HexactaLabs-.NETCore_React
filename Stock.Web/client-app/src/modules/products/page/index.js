import "./products.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import List from "../list/container";
import Create from "../create/container";
import Update from "../update/container";
import { getLoading, fetchAll } from "../list";
import Spinner from "../../../components/loading/spinner";

export class ProductsPage extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }
  render() {
    const urls = {
      create: `${this.props.match.url}/create`,
      edit: `${this.props.match.url}/update/:id`
    };

    return (
      <Spinner loading={this.props.loading}>
        <Switch>
          <Route path={urls.create} component={Create} />
          <Route path={urls.edit} component={Update} />
          <Route
            render={() => <List urls={urls} loading={this.props.loading} />}
          />
        </Switch>
      </Spinner>
    );
  }
}

ProductsPage.propTypes = {
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchAll: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { loading: getLoading(state) };
};

const mapDispatchToProps = {
  fetchAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
