import React from "react";
import { Nav, Navbar, NavDropdown, ButtonToolbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";
function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="#FFFFFF" variant="dark">
        <Navbar.Brand href="/Home" className="nav-name">
          Tara Rao-Pandit
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Projects" className="nav-text">
              Projects
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1MqK54gZvXfKduEWkajfdpFXkfLdnoI8X/view?usp=sharing"
              className="nav-text"
            >
              Resume
            </Nav.Link>
            <Nav.Link href="/About" className="nav-text">
              About Me
            </Nav.Link>

            {/* <Nav.Link href="/Fun" className="nav-text">
              Fun!
  </Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
