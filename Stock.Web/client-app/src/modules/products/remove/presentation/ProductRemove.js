import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import PropTypes from "prop-types";

const ElementRemove = props => {
  return (
    <Modal isOpen={true}>
      <ModalHeader>Eliminar producto</ModalHeader>
      <ModalBody>¿Desea eliminar este producto?</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.remove}>
          Sí
        </Button>
        <Button color="secondary" onClick={props.goBack}>
          No
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ElementRemove.propTypes = {
  remove: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

ElementRemove.displayName = "ElementRemove";

export default ElementRemove;
