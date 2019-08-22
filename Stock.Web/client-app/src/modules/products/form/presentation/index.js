import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "reactstrap";
import Validator from "../../../../common/helpers/YupValidator";
import SelectField from "../../../../components/inputs/SelectField";
import InputField from "../../../../components/inputs/InputField";
import schema from "../validation";

const ProductForm = props => {
  const { handleSubmit, handleCancel } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field label="Nombre" name="name" component={InputField} type="text" />
      <Field
        label="Precio de costo"
        name="costPrice"
        component={InputField}
        type="number"
        parse={v => Number.parseInt(v)}
      />
      <Field
        label="Precio de venta"
        name="salePrice"
        component={InputField}
        type="number"
        parse={v => Number.parseInt(v)}
      />
      <Field
        name="productTypeId"
        label="Tipo de producto"
        component={SelectField}
        type="select"
        options={props.productTypeOptions}
      />
      <Field
        name="providerId"
        label="Proveedor"
        component={SelectField}
        type="select"
        options={props.providerOptions}
      />
      <Button className="product-form__button" color="primary" type="submit">
        Guardar
      </Button>
      <Button
        className="product-form__button"
        color="secondary"
        type="button"
        onClick={handleCancel}
      >
        Cancelar
      </Button>
    </Form>
  );
};

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  productTypeOptions: PropTypes.array.isRequired,
  providerOptions: PropTypes.array.isRequired
};

export default reduxForm({
  form: "product",
  validate: Validator(schema),
  enableReinitialize: true
})(ProductForm);
