import React from "react";
import PropTypes from "prop-types";
import ReactTable from "react-table";
import { Container, Row, Col, Button } from "reactstrap";
import { FaPlus } from "react-icons/fa";
import columns from "./ColumnsConfig";

const Presentation = props => {
  return (
    <Container fluid>
      <Row className="my-1">
        <Col>
            <div className="block-header">
                <h1>Categorias</h1>
            </div>
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
  pages: PropTypes.number,
  dataLoading: PropTypes.bool.isRequired,
  defaultPageSize: PropTypes.number,
  urls: PropTypes.shape({ create: PropTypes.string }),
  push: PropTypes.func.isRequired
};

export default Presentation;
