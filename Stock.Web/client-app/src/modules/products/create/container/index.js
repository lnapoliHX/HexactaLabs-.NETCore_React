import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Alert } from "reactstrap";
import { goBack } from "connected-react-router";
import Form from "../../form/presentation";
import { create } from "../../create";
import { getProductTypes } from "../../list";

const Create = ({ create: onSubmit, goBack: onCancel, productTypeOptions }) => {
  return (
    <Container fluid>
      <Row>
        <h2>Nuevo Producto</h2>
      </Row>
      {productTypeOptions.length === 0 ? (
        <Row>
          <Col>
            <Alert color="warning">
              No existen tipos de productos. Click aquí para cargar nuevos tipos
            </Alert>
          </Col>
        </Row>
      ) : null}
      <Row>
        <Col>
          <Form
            productTypeOptions={productTypeOptions}
            onSubmit={onSubmit}
            handleCancel={onCancel}
          />
        </Col>
      </Row>
    </Container>
  );
};

Create.propTypes = {
  productTypeOptions: PropTypes.array.isRequired,
  create: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  productTypeOptions: getProductTypes(state).map(pt => ({
    label: pt.initials,
    value: pt.id
  }))
});

const mapDispatchToProps = {
  create,
  goBack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
