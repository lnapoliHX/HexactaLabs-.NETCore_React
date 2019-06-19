import React from "react";
import { Field } from "redux-form";
import { Row, Col, FormGroup } from "reactstrap";

import FormToolbar from "./Toolbar";

import RenderField from "../../../components/inputs/RenderFieldUpdate";

import PropTypes from "prop-types";

const Form = props => {
  const { handleSubmit, title } = props;
  return (
    <div>
      <h5> {title} </h5>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Row>
            <Col lg="6">
              <Field
                label="Nombre"
                name="name"
                placeholder="Nombre"
                component={RenderField}
                type="text"
              />
              <Field
                label="email"
                name="email"
                placeholder="Marca"
                component={RenderField}
                type="text"
              />
              <Field
                label="telefono"
                name="phone"
                placeholder="xxx-xxxx"
                component={RenderField}
                type="text"
              />
            </Col>
          </Row>
        </FormGroup>
        <FormToolbar {...props} />
      </form>
    </div>
  );
};

Form.displayName = "Form";
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Form;
