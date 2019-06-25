import React from "react";
import { MdSend, MdArrowBack } from "react-icons/md";
import { IoIosRedo } from "react-icons/io";
import PropTypes from "prop-types";

const Toolbar = ({ submitting, pristine, reset, goBack }) => (
  <div className="form-row mt-3 d-flex justify-content-center">
    <button
      type="submit"
      className="btn btn-lg btn-primary "
      disabled={submitting}
    >
      <MdSend /> Enviar
    </button>
    <button
      type="button"
      className="btn btn-lg btn-default"
      disabled={pristine || submitting}
      onClick={reset}
    >
      <IoIosRedo /> Limpiar
    </button>
    <button type="button" className="btn btn-lg btn-default" onClick={goBack}>
      <MdArrowBack /> Volver
    </button>
  </div>
);

Toolbar.propTypes = {
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  goBack: PropTypes.func
};

Toolbar.displayName = "Toolbar";
export default Toolbar;
