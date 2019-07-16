import React from "react";
import { connect } from "react-redux";

import ProductRemove from "../presentation/ProductRemove";
import { remove } from "../index";
import { replace } from "connected-react-router";

import PropTypes from "prop-types";

class ProductRemovePage extends React.Component {
  render() {
    return (
      <ProductRemove
        remove={() =>
          this.props.remove(this.props.match.params.id)
        }
        goBack={() => this.props.replace("/product")}
      />
    );
  }
}

ProductRemovePage.propTypes = {
  remove: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapDispatchToProps = { remove, replace };

export default connect(
  null,
  mapDispatchToProps
)(ProductRemovePage);
