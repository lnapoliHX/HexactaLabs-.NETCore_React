import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Products from "../presentation/Products";
import { getProducts, fetchAll } from "../index";
import { getProvidersById } from "../../../providers/list";

export class ProductsPage extends Component {
  constructor() {
    super();
    this.state = {
      filters: {
        id: "",
        name: "",
        type: "",
        brand: "",
        providers: []
      },
      data: []
    };
  }

  componentDidMount() {
    this.tableData();
    this.providersFilter();
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

  tableData = () => {
    const productsExpanded = this.props.products.map(product => ({
      ...product,
      providerName:
        product.providerId !== null
          ? this.props.providers[product.providerId].name
          : ""
    }));
    this.setState({
      data: productsExpanded
    });
  };

  providersFilter = () => {
    const providers = Object.values(this.props.providers).map(provider => ({
      label: provider.name,
      value: provider.id
    }));
    this.setState({
      filters: { ...this.state.filters, providers }
    });
  };

  render() {
    return (
      <Products
        data={this.state.data}
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
  return {
    products: getProducts(state),
    providers: getProvidersById(state)
  };
};

const mapDispatchToProps = {
  fetchAll,
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
