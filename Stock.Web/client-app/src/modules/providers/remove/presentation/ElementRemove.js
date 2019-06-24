import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import PropTypes from "prop-types";

const ElementRemove = props => {
  return (
    <Modal isOpen={props.isOpen}>
      <ModalHeader>Eliminar Elemento</ModalHeader>
      <ModalBody>¿Desea eliminar el siguiente elemento?</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.remove}>
          Si
        </Button>
        <Button color="secondary" onClick={props.goBack}>
          No
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ElementRemove.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  remove: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

ElementRemove.displayName = "ElementRemove";

export default ElementRemove;
