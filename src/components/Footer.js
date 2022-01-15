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
import Mail from "../images/mail.png";
import Github from "../images/github.png";

function Footer() {
  return (
  
          <div className="footer">
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
                      href="mailto: traopand@uwaterloo.ca"
                      target="_blank"
                    >
                      <Image
                        src={Mail}
                        className="mail-icon contact-icon"
                      />
                    </a>
                  </Row>
                </Col>

                {/* <Nav.Link href="/Fun" className="nav-text">
              Fun!
  </Nav.Link>*/}
              </Row>
              
    </div>
  );
}

export default Footer;
