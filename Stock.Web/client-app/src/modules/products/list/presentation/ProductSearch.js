import React from "react";
import { Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { MdSearch, MdCancel } from "react-icons/md";

import PropTypes from "prop-types";

const Search = props => {
  return (
    <React.Fragment>
      <h4>Búsqueda</h4>
      <Form onSubmit={props.submitFilter}>
        <Row>
          <Col>
            <FormGroup>
              <Input
                name="Name"
                id="nameInput"
                type="text"
                onChange={props.handleFilter}
                value={props.filters.Name}
                placeholder="Nombre"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                name="Brand"
                id="brandInput"
                type="text"
                onChange={props.handleFilter}
                value={props.filters.Brand}
                placeholder="Marca"
              />
            </FormGroup>
          </Col>
          <Col>
            <Button color="primary">
              <MdSearch /> Buscar
            </Button>
            <Button
              color="primary"
              className="ml-3"
              onClick={props.clearFilter}
            >
              <MdCancel /> Limpiar
            </Button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

Search.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  submitFilter: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired
};

export default Search;
