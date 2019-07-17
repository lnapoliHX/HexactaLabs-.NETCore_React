import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

const ProductView = props => {
  return (
    <Container fluid>
      <h1>{props.product.name}</h1>
      <Row>
        <Col lg="2">Id</Col>
        <Col>{props.product.id}</Col>
      </Row>
      <Row>
        <Col lg="2">Precio al costo</Col>
        <Col>{props.product.costPrice}</Col>
      </Row>
      <Row>
        <Col lg="2">Precio de venta</Col>
        <Col>{props.product.salePrice}</Col>
      </Row>
      <br />
      <h4>Tipo de producto</h4>
      <Row>
        <Col lg="2">Id</Col>
        <Col>{props.product.productTypeId}</Col>
      </Row>
      <Row>
        <Col lg="2">Descripción</Col>
        <Col>{props.product.productTypeDesc}</Col>
      </Row>
    </Container>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductView;
