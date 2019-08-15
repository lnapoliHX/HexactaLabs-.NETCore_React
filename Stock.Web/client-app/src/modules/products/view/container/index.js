import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductById } from "../../list/index";
import Product from "../presentation";
import Remove from "../../remove/container";
import { push } from "connected-react-router";
import { Route } from "react-router-dom";
import PropType from "prop-types";
import { getProviderById } from "../../../providers/list";

export class ProductsViewPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Product {...this.props} />
        <Route path="/product/view/:id/remove" component={Remove} />
      </React.Fragment>
    );
  }
}

ProductsViewPage.propTypes = {
  product: PropType.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const product = getProductById(state, ownProps.match.params.id);
  return {
    product,
    provider: getProviderById(state, product.providerId)
  };
};

const mapDispatchToProps = {
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsViewPage);
