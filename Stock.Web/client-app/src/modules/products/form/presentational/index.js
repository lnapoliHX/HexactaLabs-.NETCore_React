import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const ProductForm = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Nombre</Label>
        <Field name="name" component={Input} type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="costPrice">Precio de costo</Label>
        <Field name="costPrice" component={Input} type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="salePrice">Precio de venta</Label>
        <Field name="salePrice" component={Input} type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="productType">Tipo de producto</Label>
        <Field name="productType" component={Input} type="select" />
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "product"
})(ProductForm);
