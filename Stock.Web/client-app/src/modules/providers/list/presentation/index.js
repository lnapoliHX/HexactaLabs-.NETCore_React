import React from "react";
import columns from "./ColumnsConfig";
import { Container, Row, Col, Button } from "reactstrap";
import { FaPlus } from "react-icons/fa";
import ReactTable from "react-table";

import PropTypes from "prop-types";

const Presentation = props => {
  return (
    <Container fluid>
      <Row className="my-1">
        <Col>
          <h1>Proveedores</h1>
        </Col>
      </Row>
      <Row className="my-1">
        <Col>
          <Button
            className="provider__button"
            color="primary"
            onClick={() => props.push(props.urls.create)}
          >
            <FaPlus className="provider__button-icon" />
            Agregar
          </Button>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <ReactTable
            {...props}
            data={props.data}
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
  dataLoading: PropTypes.bool.isRequired,
  defaultPageSize: PropTypes.number,
  urls: PropTypes.shape({ create: PropTypes.string }),
  push: PropTypes.func.isRequired
};

export default Presentation;
