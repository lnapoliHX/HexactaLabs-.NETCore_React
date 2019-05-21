import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as NL } from 'react-router-dom'

export default class Sidebar extends React.Component {
    render() {
        let { menu, router } = this.props;
        return (
            <div>
                <hr />
                <p>Navegación</p>
                <Nav vertical>
                    {menu.map(m => (
                        <NavItem>
                            <NL to={m.to}>
                                <i class={m.icon}></i>
                                <p>{m.title}</p>
                            </NL>
                        </NavItem>
                    ))}
                </Nav>
                <hr />
                {/* <p>Link based</p>
                <Nav vertical>
                    <NavLink href="#">Link</NavLink>
                    <NavLink href="#">Link</NavLink>
                    <NavLink href="#">Another Link</NavLink>
                    <NavLink disabled href="#">Disabled Link</NavLink>
                </Nav> */}
            </div>
        );
    }
}