import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { goBack } from "connected-react-router";
import Form from "../../form/presentation";
import { create } from "..";

const Create = ({ create: onSubmit, goBack: onCancel }) => {
  return (
    <Container fluid>
      <Row>
        <h2>Nuevo Tipo Producto</h2>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={onSubmit} handleCancel={onCancel} />
        </Col>
      </Row>
    </Container>
  );
};

Create.propTypes = {
  create: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  create,
  goBack
};

export default connect(
  undefined,
  mapDispatchToProps
)(Create);
