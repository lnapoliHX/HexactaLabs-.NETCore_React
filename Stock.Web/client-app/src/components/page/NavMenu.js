import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {FaUserInjured} from 'react-icons/fa'

import { NavLink as NL } from 'react-router-dom'

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
            <div>
                <Navbar dark color="dark" expand="md">
                    <NavbarBrand >Hexacta Labs</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle caret>
                                    <FaUserInjured />
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem header>Opciones</DropdownItem>
                                    <NavLink tag={() => (
                                        <NL className="dropdown-item" to="/product"> Editar </NL>
                                    )} />
                                    <DropdownItem divider />
                                    <NavLink tag={() => (
                                        <NL className="dropdown-item" to="/logout"> Salir </NL>
                                    )} />
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
