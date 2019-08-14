import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { MdSearch } from "react-icons/md";

import PropTypes from "prop-types";

const Search = props => {
  return (
    <React.Fragment>
      <h4>Búsqueda</h4>
      <Form onSubmit={props.submitFilter}>
        <Row>
          <Col>
            <FormGroup>
              <Label for="idInput" hidden>
                Id
              </Label>
              <Input
                name="id"
                id="idInput"
                type="text"
                onChange={props.handleFilter}
                value={props.filters.id}
                placeholder="Id"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="nameInput" hidden>
                Nombre
              </Label>
              <Input
                name="name"
                id="nameInput"
                type="text"
                onChange={props.handleFilter}
                value={props.filters.name}
                placeholder="Nombre"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="emailInput" hidden>
                Email
              </Label>
              <Input
                name="email"
                id="emailInput"
                type="text"
                onChange={props.handleFilter}
                value={props.filters.email}
                placeholder="Email"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="phoneInput" hidden>
                Telefono
              </Label>
              <Input
                name="phone"
                id="phoneInput"
                type="text"
                onChange={props.handleFilter}
                value={props.filters.phone}
                placeholder="Teléfono"
              />
            </FormGroup>
          </Col>
          <Col>
            <Button color="primary">
              <MdSearch /> Buscar
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
  filters: PropTypes.object.isRequired
};

export default Search;
