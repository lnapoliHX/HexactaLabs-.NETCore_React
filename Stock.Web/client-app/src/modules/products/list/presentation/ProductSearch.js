import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { MdSearch } from "react-icons/md";

import PropTypes from "prop-types";

const Search = props => {
  return (
    <Container fluid>
      <Row>
        <h4>Búsqueda</h4>
      </Row>
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
              <Label for="brandInput" hidden>
                Marca
              </Label>
              <Input
                name="brand"
                id="brandInput"
                type="text"
                onChange={props.handleFilter}
                value={props.filters.brand}
                placeholder="Marca"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="typeInput" hidden>
                Tipo
              </Label>
              <Input
                name="type"
                id="typeInput"
                type="text"
                onChange={props.handleFilter}
                value={props.filters.type}
                placeholder="Tipo"
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
    </Container>
  );
};

Search.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  submitFilter: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired
};

export default Search;
