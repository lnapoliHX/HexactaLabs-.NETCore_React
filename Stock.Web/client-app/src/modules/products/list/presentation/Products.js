import "./products.css";
import React from "react";
import { FaPlus } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button
} from "reactstrap";
import columns from "./ColumnsConfig";
import ReactTable from "react-table";
import Search from "./ProductSearch";

import PropTypes from "prop-types";

const Presentation = props => {
  return (
    <Container fluid>
      <Row>
        <h1>Productos</h1>
      </Row>
      <Row>
        <Col md={12}>
          <Search
            handleFilter={props.handleFilter}
            submitFilter={props.submitFilter}
            filters={props.filters}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormGroup>
            <Button
              className="product__button"
              color="primary"
              onClick={() => props.push(props.urls.create)}
            >
              <FaPlus className="product__button-icon" />
              Agregar
            </Button>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
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
  urls: PropTypes.shape({ create: PropTypes.string }),
  push: PropTypes.func.isRequired
};

export default Presentation;
