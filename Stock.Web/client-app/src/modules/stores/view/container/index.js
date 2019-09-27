import React, { Component } from "react";
import { connect } from "react-redux";
import { getStoreById } from "../../list/index";
import Presentation from "../presentation";
import Remove from "../../remove/container";
import { push } from "connected-react-router";
import { Route } from "react-router-dom";
import PropType from "prop-types";

export class StoreViewPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Presentation store={this.props.store} {...this.props} />
        <Route path="/store/view/:id/remove" component={Remove} />
      </React.Fragment>
    );
  }
}

StoreViewPage.propTypes = {
  store: PropType.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    store: getStoreById(state, ownProps.match.params.id)
  };
};

const mapDispatchToProps = {
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreViewPage);
