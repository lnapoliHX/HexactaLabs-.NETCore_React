import React from 'react'
import { MdCreateNewFolder } from 'react-icons/md'

const Nuevo = ({ goToCreate }) => (
    <div>
        <button
            onClick={() => goToCreate()}
            type="button"
            className="btn btn-info add-new">
            <MdCreateNewFolder /> Nuevo Elemento
    </button>
    </div>)

export default Nuevo;