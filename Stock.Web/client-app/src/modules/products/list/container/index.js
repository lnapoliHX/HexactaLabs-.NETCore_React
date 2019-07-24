import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Products from "../presentation/Products";
import { getProducts, fetchAll } from "../index";

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
    return (
      <Products
        data={this.props.products}
        defaultPageSize={5}
        filters={this.state.filters}
        handleFilter={this.filterChanged}
        submitFilter={this.submitFilters}
        dataLoading={this.props.loading}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  return { products: getProducts(state) };
};

const mapDispatchToProps = {
  fetchAll,
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
