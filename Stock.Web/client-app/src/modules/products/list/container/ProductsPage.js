import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../presentation/Products";
import { fetchAll, getProducts, getLoading } from "../index";

export class ProductsPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      filters: {}
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    this.props.fetchAll(this.state.filters).then(() => {
      this.setState({
        products: this.props.products
      });
    });
  };

  submitFilters = event => {
    event.preventDefault();
    this.fetchProducts();
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
        data={this.state.products}
        defaultPageSize={5}
        filters={this.state.filters}
        handleFilter={this.filterChanged}
        submitFilter={this.submitFilters}
        dataLoading={this.props.loading}
      />
    );
  }
}

const mapStateToProps = state => {
  return { products: getProducts(state), loading: getLoading(state) };
};

const mapDispatchToProps = {
  fetchAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
