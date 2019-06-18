import React from 'react';
import { Nav, NavItem, Col } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom'

const Sidebar = ({ menu }) => (
    <Col sm={1}>
        <hr />
        <p>Navegación</p>
        <Nav vertical>
            {menu.map(({ to, icon, title }, i) => (
                <NavItem key={i} tag={() => 
                    <Link to={to}>
                        <i className={icon}></i>
                        <p>{title}</p>
                    </Link>
                    } 
                />
            ))}
        </Nav>
        <hr />
    </Col>
);

export default Sidebar;