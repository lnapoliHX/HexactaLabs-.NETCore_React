import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import PropTypes from "prop-types";

const ProviderView = props => {
  return (
    <Container fluid>
      <h1>{props.provider.name}</h1>
      <Row>
        <Col lg="2">Id</Col>
        <Col>{props.provider.id}</Col>
      </Row>
      <Row>
        <Col lg="2">Email</Col>
        <Col>{props.provider.email}</Col>
      </Row>
      <Row>
        <Col lg="2">Teléfono</Col>
        <Col>{props.provider.phone}</Col>
      </Row>
      <div className="provider-view__button-row">
        <Button
          className="provider-form__button"
          color="primary"
          onClick={() =>
            props.push(`/provider/update/${props.match.params.id}`)
          }
        >
          Editar
        </Button>
        <Button
          className="provider-form__button"
          color="danger"
          onClick={() =>
            props.push(`/provider/view/${props.match.params.id}/remove`)
          }
        >
          Eliminar
        </Button>
        <Button
          className="provider-form__button"
          color="default"
          onClick={() => props.push(`/provider`)}
        >
          Volver
        </Button>
      </div>
    </Container>
  );
};

ProviderView.propTypes = {
  provider: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

export default ProviderView;
