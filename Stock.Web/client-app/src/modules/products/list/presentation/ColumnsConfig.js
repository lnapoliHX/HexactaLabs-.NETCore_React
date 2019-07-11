import React from "react";

import PropTypes from "prop-types";

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
  }
];

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired
};

export default columns;
