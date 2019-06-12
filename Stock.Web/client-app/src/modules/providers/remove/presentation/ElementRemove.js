import React from 'react'
// import { Wrapper } from '../../../common/page'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
// import ItemView from '../../presentational/ItemView';

export default props => {
    return (
        // <Wrapper>
        <div>
            <Modal isOpen={props.isOpen}>
                <ModalHeader>Eliminar Elemento</ModalHeader>
                <ModalBody>
                    ¿Desea eliminar el siguiente elemento?
                    {/* <ItemView {...props} /> */}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.remove}>Si</Button>{' '}
                    <Button color="secondary" onClick={props.goBack}>No</Button>
                </ModalFooter>
            </Modal>
        </div>
        // </Wrapper >
    )
}