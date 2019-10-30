import React from "react";
import { FaPlus } from "react-icons/fa";
import { Container, Row, Col, Button } from "reactstrap";
import columns from "./ColumnsConfig";
import ReactTable from "react-table";
import Search from "./ProductSearch";

import PropTypes from "prop-types";

const Presentation = props => {
  return (
    <Container fluid>
      <Row className="my-1">
        <Col>
            <div className="block-header">
                <h1>Productos</h1>
            </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Search
            handleFilter={props.handleFilter}
            submitFilter={props.submitFilter}
            clearFilter={props.clearFilter}
            filters={props.filters}
          />
        </Col>
      </Row>
      <Row className="my-1 agregarALaLista">
        <Col>
          <Button
            className="product__button"
            color="primary"
            aria-label="Agregar"
            onClick={() => props.push(props.urls.create)}
          >
            <FaPlus className="product__button-icon" />            
          </Button>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <ReactTable
            {...props}
            data={props.data}
            pages={props.pages}
            loading={props.dataLoading}
            columns={columns}
            defaultPageSize={props.defaultPageSize}
            className="-striped -highlight"
          />
        </Col>
      </Row>
    </Container>
  );
};

Presentation.propTypes = {
  data: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  pages: PropTypes.number,
  dataLoading: PropTypes.bool.isRequired,
  defaultPageSize: PropTypes.number,
  handleFilter: PropTypes.func.isRequired,
  submitFilter: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  urls: PropTypes.shape({ create: PropTypes.string }),
  push: PropTypes.func.isRequired
};

export default Presentation;
