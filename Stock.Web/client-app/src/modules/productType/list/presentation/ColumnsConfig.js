import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const renderToolbar = ({ value }) => {
  let viewButton = (
    <Link className="product-list__button" to={`/product-type/view/${value}`}>
      <FaSearch className="product-list__button-icon" />
    </Link>
  );

  let editButton = (
    <Link className="product-list__button" to={`/product-type/update/${value}`}>
      <FaEdit className="product-list__button-icon" />
    </Link>
  );

  let removeButton = (
    <Link className="product-list__button" to={`/product-type/remove/${value}`}>
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
    <h2 className="tableHeading">
      {props.title}
    </h2>
  );
};

HeaderComponent.displayName = "HeaderComponent";

const columns = [
  {
    Header: <HeaderComponent title="Iniciales" />,
    accessor: "initials",
    Cell: props => props.value
  },
  {
    Header: <HeaderComponent title="Descripción" />,
    accessor: "description",
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
