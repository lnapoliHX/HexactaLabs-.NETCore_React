import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductById } from "../../list/index";
import Product from "../presentation";
import Remove from "../../remove/container";
import { push } from "connected-react-router";
import { Route } from "react-router-dom";
import PropType from "prop-types";

export class ProductsViewPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Product product={this.props.product} {...this.props} />
        <Route path="/product/view/:id/remove" component={Remove} />
      </React.Fragment>
    );
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

const mapDispatchToProps = {
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsViewPage);
