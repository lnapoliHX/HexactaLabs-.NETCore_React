import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { goBack } from "connected-react-router";
import Form from "../../form/presentational";
import { update } from "..";
import { getProductTypes, getProductById } from "../../list";

const Update = ({
  initialValues,
  update: onSubmit,
  goBack: onCancel,
  productTypeOptions
}) => {
  return (
    <Container fluid>
      <Row>
        <h2>Edición</h2>
      </Row>
      <Row>
        <Col>
          <Form
            initialValues={initialValues}
            productTypeOptions={productTypeOptions}
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
  initialValues: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  productTypeOptions: getProductTypes(state),
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
