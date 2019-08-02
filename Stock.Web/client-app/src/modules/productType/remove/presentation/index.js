import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ModalRemove = ({ remove, goBack }) => {
  return (
    <Modal isOpen>
      <ModalHeader>Confirmar</ModalHeader>
      <ModalBody>¿Desea eliminar esta categoría?</ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={remove}>
          Sí
        </Button>
        <Button color="secondary" onClick={goBack}>
          No
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ModalRemove.propTypes = {
  remove: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

ModalRemove.displayName = "ElementRemove";

export default ModalRemove;
