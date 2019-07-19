import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import PropTypes from "prop-types";

const ProductView = ({ type = {}, push, match }) => {
  return (
    <Container fluid>
      <h1>{type.initials}</h1>
      <Row>
        <Col lg="2">Id</Col>
        <Col>{type.id}</Col>
      </Row>
      <Row>
        <Col lg="2">Iniciales</Col>
        <Col>{type.initials}</Col>
      </Row>
      <Row>
        <Col lg="2">Descripción</Col>
        <Col>{type.description}</Col>
      </Row>
      <div className="product-view__button-row">
        <Button
          className="product-form__button"
          color="primary"
          onClick={() => push(`/product-type/update/${match.params.id}`)}
        >
          Editar
        </Button>
        <Button
          className="product-form__button"
          color="danger"
          onClick={() => push(`/product-type/view/${match.params.id}/remove`)}
        >
          Eliminar
        </Button>
      </div>
    </Container>
  );
};

ProductView.propTypes = {
  type: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

export default ProductView;
