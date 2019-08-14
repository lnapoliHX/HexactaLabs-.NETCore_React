import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { goBack } from "connected-react-router";
import Form from "../../form/presentation";
import { update } from "..";
import { getProductTypes, getProductById } from "../../list";
import { getProviders, getAll } from "../../../providers/list";

class Update extends React.Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <h2>Edición</h2>
        </Row>
        <Row>
          <Col>
            <Form
              initialValues={this.props.initialValues}
              productTypeOptions={this.props.productTypeOptions}
              providerOptions={this.props.providerOptions}
              onSubmit={this.props.update}
              handleCancel={this.props.goBack}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

Update.propTypes = {
  productTypeOptions: PropTypes.array.isRequired,
  providerOptions: PropTypes.array.isRequired,
  initialValues: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  getAll: PropTypes.func.isRequired
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
  goBack,
  getAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Update);
