import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { goBack } from "connected-react-router";
import Form from "../../form/presentation";
import { update } from "..";
import { getProductById } from "../../list";
import { getProviders } from "../../../providers/list";
import { getProductTypes } from "../../../productType/list";

const Update = ({
  initialValues,
  update: onSubmit,
  goBack: onCancel,
  productTypeOptions,
  providerOptions
}) => {
  return (
    <Container fluid>
      <Row>
        <Col>
            <div className="block-header">
                <h1>Edición</h1>
            </div>
        </Col>
      </Row>
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

Update.propTypes = {
  productTypeOptions: PropTypes.array.isRequired,
  providerOptions: PropTypes.array.isRequired,
  initialValues: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  productTypeOptions: getProductTypes(state).map(pt => ({
    label: pt.initials,
    value: pt.id
  })),
  providerOptions: getProviders(state).map(provider => ({
    label: provider.name,
    value: provider.id
  })),
  initialValues: getProductById(state, ownProps.match.params.id)
});

const mapDispatchToProps = {
  update,
  goBack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Update);
