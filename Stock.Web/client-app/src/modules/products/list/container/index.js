import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Products from "../presentation/Products";
import { getProducts, fetchByFilters, fetchAll } from "../index";
import { getProvidersById } from "../../../providers/list";

export class ProductsPage extends Component {
  constructor() {
    super();
    this.state = {
      filters: {
        Name: "",
        Brand: "",
        Condition: "AND"
      }
    };
  }

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
        submitFilter={() => this.props.fetchByFilters(this.state.filters)}
        clearFilter={this.props.fetchAll}
        dataLoading={this.props.loading}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  const providersById = getProvidersById(state);
  return {
    products: getProducts(state).map(product => ({
      ...product,
      providerName: product.providerId
        ? providersById[product.providerId].name
        : ""
    })),
    providers: providersById
  };
};

const mapDispatchToProps = {
  fetchByFilters,
  fetchAll,
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
