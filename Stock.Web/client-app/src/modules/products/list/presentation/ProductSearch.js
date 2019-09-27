import React from "react";
import { Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { MdSearch, MdCancel } from "react-icons/md";

import PropTypes from "prop-types";

const Search = props => {
  return (
    <React.Fragment>
        <div className="busqueda">
        <h4>Búsqueda</h4>
        <Form onSubmit={props.submitFilter}>
            <div className="flex-container">            
                <div>
                    <Input
                    name="Name"
                    id="nameInput"
                    type="text"
                    onChange={props.handleFilter}
                    value={props.filters.Name}
                    placeholder="Nombre"
                    />
                </div>
                <div>
                    <Input
                        name="Brand"
                        id="brandInput"
                        type="text"
                        onChange={props.handleFilter}
                        value={props.filters.Brand}
                        placeholder="Tipo de producto"
                    />
                </div>
                <div class="lastCol">
                    <Button color="primary" aria-label="Search" className="searchButton">
                        <MdSearch />
                    </Button>
                    <Button color="primary" aria-label="Clear" className="ml-3 clearButton" onClick={props.clearFilter}>
                        <MdCancel />
                    </Button>
                </div>
            </div>
        </Form>
      </div>
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
