import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Page extends Component {
  render() {
    return <div />;
  }
}

Page.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
