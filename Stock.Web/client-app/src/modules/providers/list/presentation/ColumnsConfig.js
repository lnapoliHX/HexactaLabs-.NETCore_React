import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

import PropTypes from "prop-types";

const renderToolbar = ({ ...props }) => {
  let viewButton = (
    <Link to={`/provider/view/${props.value}`}>
      <button>
        <FaSearch />
      </button>
    </Link>
  );

  let editButton = (
    <Link to={`/provider/update/${props.value}`}>
      <button>
        <FaEdit />
      </button>
    </Link>
  );

  let removeButton = (
    <Link to={`/provider/remove/${props.value}`}>
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
    Header: <HeaderComponent title="Nombre" />,
    accessor: "name",
    Cell: props => props.value
  },
  {
    Header: <HeaderComponent title="Email" />,
    accessor: "email",
    Cell: props => props.value
  },
  {
    Header: <HeaderComponent title="Telefono" />,
    accessor: "phone",
    Cell: props => props.value
  },
  {
    Header: <HeaderComponent title="Opciones" />,
    accessor: "id",
    Cell: renderToolbar
  }
];

renderToolbar.propTypes = {
  value: PropTypes.string.isRequired
};

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired
};

export default columns;
