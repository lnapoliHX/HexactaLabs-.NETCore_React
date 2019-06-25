import React from "react";
import columns from "./ColumnsConfig";

import ReactTable from "react-table";
import Nuevo from "./NewElement";

import PropTypes from "prop-types";

const Presentation = props => {
  return (
    <div className="col">
      <Nuevo goToCreate={props.goToCreate} /> <br />
      <ReactTable
        {...props}
        manual
        data={props.data}
        pages={props.pages}
        loading={props.data_loading}
        onFetchData={props.fetchData}
        onPageSizeChange={props.onPageSizeChange}
        columns={columns}
        defaultPageSize={props.defaultPageSize}
        className="-striped -highlight"
      />
    </div>
  );
};

Presentation.propTypes = {
  goToCreate: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  pages: PropTypes.number,
  data_loading: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  defaultPageSize: PropTypes.number
};

export default Presentation;
