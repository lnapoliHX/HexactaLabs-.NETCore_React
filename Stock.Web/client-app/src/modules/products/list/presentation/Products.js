import React from "react";
import columns from "./ColumnsConfig";
import ReactTable from "react-table";
import Search from "./ProductSearch";

import PropTypes from "prop-types";

const Presentation = props => {
  return (
    <div className="col mt-4">
      <h1>Productos</h1>
      <Search
        handleFilter={props.handleFilter}
        submitFilter={props.submitFilter}
        filters={props.filters}
      />
      <ReactTable
        {...props}
        data={props.data}
        pages={props.pages}
        loading={props.dataLoading}
        columns={columns}
        defaultPageSize={props.defaultPageSize}
        className="-striped -highlight"
      />
    </div>
  );
};

Presentation.propTypes = {
  data: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  pages: PropTypes.number,
  dataLoading: PropTypes.bool.isRequired,
  defaultPageSize: PropTypes.number,
  handleFilter: PropTypes.func.isRequired,
  submitFilter: PropTypes.func.isRequired
};

export default Presentation;
