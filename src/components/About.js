import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Tara from "../images/drawing.png";
import Linkedin from "../images/linkedin.png";
import Devpost from "../images/devpost.png";
import Github from "../images/github.png";
import Typewriter from "typewriter-effect";
import "../styles/Home.css";

function About() {
  return (
    <div className="div-intro">
      <Row className="intro">
        <Col xs={12} md={8} className="center">
          <div className="header-name">
            {" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi! I'm Tara,")
                  .callFunction(() => {})
                  .start();
              }}
            />
          </div>
          <div className="subtext">
            a second-year{" "}
            <span style={{ color: "#E86A67", fontWeight: "bold" }}>
              Systems Design Engineering
            </span>{" "}
            student at The University of Waterloo with a passion for developing{" "}
            <span style={{ color: "#E86A67", fontWeight: "bold" }}>
              accessible{" "}
            </span>{" "}
            and{" "}
            <span style={{ color: "#E86A67", fontWeight: "bold" }}>
              user-focused{" "}
            </span>{" "}
            technology .
            <br />
            <br />
            I'm currently looking for
            <span style={{ color: "#E86A67", fontWeight: "bold" }}>
              {" "}
              Summer 2022
            </span>{" "}
            internship opportunities to expand my skills and am interested in{" "}
            <span style={{ color: "#E86A67", fontWeight: "bold" }}>
              web/app development
            </span>
            , and{" "}
            <span style={{ color: "#E86A67", fontWeight: "bold" }}>
              UI/UX design
            </span>
            .
            <Row className="row-icons">
              <a
                href="https://www.linkedin.com/in/tara-rao-pandit/"
                target="_blank"
              >
                <Image className="icon contact-icon" src={Linkedin}></Image>
              </a>

              <a href="https://github.com/traopand" target="_blank">
                <Image className="icon contact-icon" src={Github}></Image>
              </a>

              <a
                href="https://devpost.com/tararaopandit?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                target="_blank"
              >
                <Image
                  className="icon-devpost contact-icon"
                  src={Devpost}
                ></Image>
              </a>
            </Row>
          </div>
        </Col>
        <Col
          xs={8}
          md={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={Tara} className="image-tara" />
        </Col>
      </Row>
    </div>
  );
}

export default About;
