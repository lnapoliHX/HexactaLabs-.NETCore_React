import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import Form from "../../form/presentational";
import { create } from "../../create";

const Create = ({ create: onSubmit }) => {
  return (
    <Container fluid>
      <Row>
        <h2>Nuevo Producto</h2>
      </Row>
      <Row>
        <Form onSubmit={onSubmit} />
      </Row>
    </Container>
  );
};

Create.propTypes = {
  create: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  create
};

export default connect(
  undefined,
  mapDispatchToProps
)(Create);
