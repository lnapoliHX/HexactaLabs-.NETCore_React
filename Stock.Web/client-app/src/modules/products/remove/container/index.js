import React from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import PropTypes from "prop-types";
import ProductRemove from "../presentation";
import { remove } from "../index";

class ProductRemovePage extends React.Component {
  render() {
    const goBackPath =
      this.props.match.url.indexOf("view") > -1
        ? `/product/view/${this.props.match.params.id}`
        : "/product";
    return (
      <ProductRemove
        remove={() => this.props.remove(this.props.match.params.id)}
        goBack={() => this.props.replace(goBackPath)}
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
