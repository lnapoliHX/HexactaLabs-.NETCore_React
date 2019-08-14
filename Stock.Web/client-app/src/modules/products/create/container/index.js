import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { goBack } from "connected-react-router";
import Form from "../../form/presentation";
import { create } from "../../create";
import { getProductTypes } from "../../list";
import { getProviders, getAll } from "../../../providers/list";

class Create extends React.Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <h2>Nuevo Producto</h2>
        </Row>
        {this.props.productTypeOptions.length === 0 ? (
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
        <Row>
          <Col>
            <Form
              productTypeOptions={this.props.productTypeOptions}
              providerOptions={this.props.providerOptions}
              onSubmit={this.props.create}
              handleCancel={this.props.goBack}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

Create.propTypes = {
  productTypeOptions: PropTypes.array.isRequired,
  providerOptions: PropTypes.array.isRequired,
  create: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  getAll: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  productTypeOptions: getProductTypes(state).map(pt => ({
    label: pt.initials,
    value: pt.id
  })),
  providerOptions: getProviders(state).map(provider => ({
    label: provider.name,
    value: provider.id
  }))
});

const mapDispatchToProps = {
  create,
  goBack,
  getAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
