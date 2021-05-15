import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Tara from "../images/tara.png";
import Linkedin from "../images/linkedin.png";
import Devpost from "../images/devpost.png";
import Github from "../images/github.png";
import Typewriter from "typewriter-effect";
import "../styles/Home.css";

function About() {
  return (
    <div className="div-intro">
      <Row className="intro">
        <Col xs={8} md={4}>
          <Image src={Tara} className="image-tara" />
        </Col>
        <Col xs={12} md={8}>
          <div className="header"> Hello! I am </div>
          <div className="header-name">
            {" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Tara Rao-Pandit")
                  .callFunction(() => {})
                  .start();
              }}
            />
          </div>
          <div className="subtext">
            I am a first-year Systems Design Engineering student at The
            University of Waterloo. I am currently looking for Fall 2021
            internship opportunities to expand my skills and am interested in
            software, web/app development, and UI/UX design.
            <Row className="row-icons">
              <Col>
                <a
                  href="https://www.linkedin.com/in/tara-rao-pandit/"
                  target="_blank"
                >
                  <Image className="icon contact-icon" src={Linkedin}></Image>
                </a>
              </Col>
              <Col>
                <a href="https://github.com/traopand" target="_blank">
                  <Image className="icon contact-icon" src={Github}></Image>
                </a>
              </Col>
              <Col>
                <a
                  href="https://devpost.com/tararaopandit?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                  target="_blank"
                >
                  <Image
                    className="icon-devpost contact-icon"
                    src={Devpost}
                  ></Image>
                </a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;
