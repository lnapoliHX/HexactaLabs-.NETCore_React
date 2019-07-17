import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductById } from "../../list/index";
import Product from "../presentation";
import PropType from "prop-types";

export class ProductsViewPage extends Component {
  render() {
    return <Product {...this.props} />;
  }
}

ProductsViewPage.propTypes = {
  product: PropType.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    product: getProductById(state, ownProps.match.params.id)
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductsViewPage);
