import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FaUserInjured } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar dark color="secondary" expand="md">
        <NavbarBrand>Hexacta Labs</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle caret>
                <FaUserInjured />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>Opciones</DropdownItem>
                <DropdownItem
                  tag={() => (
                    <Link className="dropdown-item" to="/product">
                      Editar
                    </Link>
                  )}
                />
                <DropdownItem divider />
                <DropdownItem
                  tag={() => (
                    <Link className="dropdown-item" to="/logout">
                      Salir
                    </Link>
                  )}
                />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
