import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const renderToolbar = ({ ...props }) => {
  let viewButton = (
    <Link to={`/product/view/${props.value}`}>
      <button>
        <FaSearch />
      </button>
    </Link>
  );

  let editButton = (
    <Link to={`/product/edit/${props.value}`}>
      <button>
        <FaEdit />
      </button>
    </Link>
  );

  let removeButton = (
    <Link to={`/product/remove/${props.value}`}>
      <button>
        <FaTrash />
      </button>
    </Link>
  );

  return (
    <span>
      {viewButton} {editButton} {removeButton}{" "}
    </span>
  );
};

const HeaderComponent = props => {
  return (
    <div
      style={{
        textAlign: "left",
        fontWeight: "bold"
      }}
    >
      {props.title}
    </div>
  );
};

HeaderComponent.displayName = "HeaderComponent";

const columns = [
  {
    Header: <HeaderComponent title="ID" />,
    accessor: "id",
    Cell: props => props.value
  },
  {
    Header: <HeaderComponent title="Nombre" />,
    accessor: "name",
    Cell: props => props.value
  },
  {
    Header: <HeaderComponent title="Marca" />,
    accessor: "productTypeDesc",
    Cell: props => props.value
  },
  {
    Header: <HeaderComponent title="Tipo" />,
    accessor: "productTypeId",
    Cell: props => props.value
  },
  {
    Header: <HeaderComponent title="Acciones" />,
    accessor: "id",
    Cell: renderToolbar
  }
];

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

renderToolbar.propTypes = {
  value: PropTypes.number.isRequired
};

export default columns;
