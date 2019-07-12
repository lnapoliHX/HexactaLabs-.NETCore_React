import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { push } from "connected-react-router";
import Products from "../presentation/Products";
import Create from "../../create/container";
import { fetchAll, getProducts, getLoading } from "../index";
import Spinner from "../../../../components/loading/spinner";

export class ProductsPage extends Component {
  constructor() {
    super();
    this.state = {
      filters: {
        id: "",
        name: "",
        type: "",
        brand: ""
      }
    };
  }

  componentDidMount() {
    this.props.fetchAll(this.state.filters);
  }

  submitFilters = event => {
    event.preventDefault();
    this.props.fetchAll(this.state.filters);
  };

  filterChanged = event => {
    const newFilters = {
      ...this.state.filters,
      [event.target.name]: event.target.value
    };
    this.setState({ filters: newFilters });
  };

  render() {
    const urls = {
      create: `${this.props.match.url}/create`
    };

    return (
      <Spinner loading={this.props.loading}>
        <Switch>
          <Route path={urls.create} component={Create} />
          <Route
            render={props => (
              <Products
                data={this.props.products}
                defaultPageSize={5}
                filters={this.state.filters}
                handleFilter={this.filterChanged}
                submitFilter={this.submitFilters}
                dataLoading={this.props.loading}
                urls={urls}
                push={this.props.push}
                {...props}
              />
            )}
          />
        </Switch>
      </Spinner>
    );
  }
}

const mapStateToProps = state => {
  return { products: getProducts(state), loading: getLoading(state) };
};

const mapDispatchToProps = {
  fetchAll,
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
