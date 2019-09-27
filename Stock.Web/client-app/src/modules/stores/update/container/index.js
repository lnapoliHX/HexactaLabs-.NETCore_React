import React from "react";
import { connect } from "react-redux";
import { goBack } from "connected-react-router";
import PropTypes from "prop-types";
import { getStoreById } from "../../list";
import { update } from "..";
import Form from "../../form/presentation";
import { Container, Row, Col } from "reactstrap";

const Update = ({ initialValues, update: onSubmit, goBack: onCancel }) => {
  return (
    <Container fluid>
      <Row>
        <h2>Edición</h2>
      </Row>
      <Row>
        <Col>
          <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            handleCancel={onCancel}
          />
        </Col>
      </Row>
    </Container>
  );
};

Update.propTypes = {
  initialValues: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  initialValues: getStoreById(state, ownProps.match.params.id)
});

const mapDispatchToProps = {
  update,
  goBack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Update);
