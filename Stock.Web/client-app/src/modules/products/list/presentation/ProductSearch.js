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
              <Label for="idInput">Id</Label>
              <Input
                name="id"
                id="idInput"
                type="text"
                onChange={props.handleFilter}
                value={props.filters.id || ""}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="nameInput">Nombre</Label>
              <Input
                name="name"
                id="nameInput"
                type="text"
                onChange={props.handleFilter}
                value={props.filters.name || ""}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="brandInput">Marca</Label>
              <Input
                name="brand"
                id="brandInput"
                type="text"
                onChange={props.handleFilter}
                value={props.filters.brand || ""}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="typeInput">Tipo</Label>
              <Input
                name="type"
                id="typeInput"
                type="text"
                onChange={props.handleFilter}
                value={props.filters.type || ""}
              />
            </FormGroup>
          </Col>
          <Col style={searchButtonStyle}>
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

const searchButtonStyle = {
  display: "flex",
  alignItems: "center"
};

export default Search;
