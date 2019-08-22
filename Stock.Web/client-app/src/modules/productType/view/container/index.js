import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Route } from "react-router-dom";
import { getById } from "../../list/index";
import Type from "../presentation";
import Remove from "../../remove/container";

export class ProductTypeViewPage extends Component {
  render() {
    const { type, push, match } = this.props;
    return (
      <React.Fragment>
        <Type type={type} push={push} match={match} />
        <Route path="/product-type/view/:id/remove" component={Remove} />
      </React.Fragment>
    );
  }
}

ProductTypeViewPage.propTypes = {
  type: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    type: getById(state, ownProps.match.params.id)
  };
};

const mapDispatchToProps = {
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductTypeViewPage);
