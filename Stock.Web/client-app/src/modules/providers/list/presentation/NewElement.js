import React from "react";
import { MdCreateNewFolder } from "react-icons/md";
import PropTypes from "prop-types";

const Nuevo = ({ goToCreate }) => (
  <button
    onClick={() => goToCreate()}
    type="button"
    className="btn btn-info add-new"
  >
    <MdCreateNewFolder /> Nuevo Elemento
  </button>
);

Nuevo.propTypes = {
  goToCreate: PropTypes.func.isRequired
};

export default Nuevo;
