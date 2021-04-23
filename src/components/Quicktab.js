import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Rectangle from "../images/rectangle.png";
import Quicktab from "../images/quicktab.png";

import "../styles/Quicktab.css";

function Projects() {
  return (
    <div className="div-projects">
      <Row>
        <div className="projects-header">Quicktab:</div>
        <div className="slogan">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("My experience as a software developer intern")
                .callFunction(() => {})
                .start();
            }}
          />
        </div>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Image src={Quicktab} className="img-top"></Image>
      </Row>
    </div>
  );
}

export default Projects;
