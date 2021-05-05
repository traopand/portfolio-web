import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  ButtonToolbar,
  Col,
  Row,
  Image,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";
import Linkedin from "../images/linkedin.png";
import Devpost from "../images/devpost.png";
import Github from "../images/github.png";

function Footer() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="footer"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Row style={{ justifyContent: "center" }}>
              <Col>
                <Nav.Link href="/Projects" className="footer-head">
                  Projects
                </Nav.Link>
                <Nav.Link href="/Quicktab" className="footer-text">
                  Quicktab
                </Nav.Link>
                <Nav.Link href="/Splitpeas" className="footer-text">
                  SplitPeas
                </Nav.Link>
                <Nav.Link href="/Habbit" className="footer-text">
                  Habbit
                </Nav.Link>
                <Nav.Link href="/Rally" className="footer-text">
                  Rally
                </Nav.Link>
              </Col>
              <Nav.Link
                href="https://drive.google.com/file/d/1MqK54gZvXfKduEWkajfdpFXkfLdnoI8X/view?usp=sharing"
                className="footer-head"
              >
                Resume
              </Nav.Link>
              <Nav.Link href="/About" className="footer-head">
                About Me
              </Nav.Link>
              <Col>
                <Nav.Link className="footer-head-disabled">Contact</Nav.Link>

                <Nav.Link className="footer-text">
                  traopand@uwaterloo.ca
                </Nav.Link>
                <Row className="contact-icons ">
                  <a href="https://www.linkedin.com/in/tara-rao-pandit/">
                    <Image
                      src={Linkedin}
                      className="linkedin-icon contact-icon"
                    />
                  </a>

                  <a href="https://github.com/traopand">
                    <Image src={Github} className="github-icon contact-icon" />
                  </a>
                  <a href="https://devpost.com/tararaopandit?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
                    <Image
                      src={Devpost}
                      className="devpost-icon contact-icon"
                    />
                  </a>
                </Row>
              </Col>

              {/* <Nav.Link href="/Fun" className="nav-text">
              Fun!
  </Nav.Link>*/}
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Footer;