import React from "react";
import PropTypes from "prop-types";
import { Nav, NavItem, Col } from "reactstrap";
import { NavLink as Link } from "react-router-dom";

const Sidebar = ({ menu }) => (
  <Col sm={1}>
    <hr />
    <p>Navegación</p>
    <Nav vertical>
      {menu.map(({ to, icon, title }, i) => (
        <NavItem
          key={i}
          tag={() => (
            <Link to={to}>
              <i className={icon} />
              <p>{title}</p>
            </Link>
          )}
        />
      ))}
    </Nav>
    <hr />
  </Col>
);

Sidebar.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      icon: PropTypes.string,
      title: PropTypes.string
    })
  )
};

export default Sidebar;
