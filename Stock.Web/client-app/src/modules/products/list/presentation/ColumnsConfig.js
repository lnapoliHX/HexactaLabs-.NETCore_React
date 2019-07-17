import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const renderToolbar = ({ ...props }) => {
  let viewButton = (
    <Link className="product-list__button" to={`/product/view/${props.value}`}>
      <FaSearch className="product-list__button-icon" />
    </Link>
  );

  let editButton = (
    <Link
      className="product-list__button"
      to={`/product/update/${props.value}`}
    >
      <FaEdit className="product-list__button-icon" />
    </Link>
  );

  let removeButton = (
    <Link
      className="product-list__button"
      to={`/product/remove/${props.value}`}
    >
      <FaTrash className="product-list__button-icon" />
    </Link>
  );

  return (
    <span>
      {viewButton}
      {editButton}
      {removeButton}
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
  value: PropTypes.string.isRequired
};

export default columns;
