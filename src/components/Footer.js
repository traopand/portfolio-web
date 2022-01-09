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
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <div>
              <Row style={{ justifyContent: "center" }}>
                <Col>
                  <Row className="contact-icons ">
                    <a
                      href="https://www.linkedin.com/in/tara-rao-pandit/"
                      target="_blank"
                    >
                      <Image
                        src={Linkedin}
                        className="linkedin-icon contact-icon"
                      />
                    </a>

                    <a href="https://github.com/traopand" target="_blank">
                      <Image
                        src={Github}
                        className="github-icon contact-icon"
                      />
                    </a>
                    <a
                      href="https://devpost.com/tararaopandit?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                      target="_blank"
                    >
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
              <Row className="coded-by">
                Coded by Tara Rao-Pandit using React JS {`:)`}
              </Row>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Footer;
