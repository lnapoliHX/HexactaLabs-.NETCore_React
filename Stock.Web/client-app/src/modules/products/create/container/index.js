import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { goBack } from "connected-react-router";
import Form from "../../form/presentation";
import { create } from "../../create";
import { getProductTypes } from "../../../productType/list";
import { getProviders } from "../../../providers/list";

const Create = ({
  create: onSubmit,
  goBack: onCancel,
  productTypeOptions,
  providerOptions,
  initialValues
}) => {
  return (
    <Container fluid>
      <Row>
        <h2>Nuevo Producto</h2>
      </Row>
      {!productTypeOptions.length ? (
        <Row>
          <Col>
            <Alert color="warning">
              No existen categorías. Click&nbsp;
              <Link to="../product-type/create">aquí</Link> para cargar nuevas
              categorías.
            </Alert>
          </Col>
        </Row>
      ) : null}
      {!providerOptions.length ? (
        <Row>
          <Col>
            <Alert color="warning">
              No existen proveedores. Click&nbsp;
              <Link to="../provider/create">aquí</Link> para crear uno nuevo.
            </Alert>
          </Col>
        </Row>
      ) : null}
      <Row>
        <Col>
          <Form
            initialValues={initialValues}
            productTypeOptions={productTypeOptions}
            providerOptions={providerOptions}
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
  providerOptions: PropTypes.array.isRequired,
  create: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const productTypes = getProductTypes(state);
  const providers = getProviders(state);
  return {
    productTypeOptions: productTypes.map(pt => ({
      label: pt.description,
      value: pt.id
    })),
    providerOptions: providers.map(provider => ({
      label: provider.name,
      value: provider.id
    })),
    initialValues: {
      productTypeId: productTypes.length ? productTypes[0].id : "default",
      providerId: providers.length ? providers[0].id : "default"
    }
  };
};

const mapDispatchToProps = {
  create,
  goBack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
