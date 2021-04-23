import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Rectangle from "../images/rectangle.png";
import Habbit from "../images/habbit.png";

import "../styles/Habbit.css";

function Projects() {
  return (
    <div className="div-projects">
      <Row>
        <div className="projects-header">Habbit:</div>
        <div className="slogan">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Explore the realm of financial planning!")
                .callFunction(() => {})
                .start();
            }}
          />
        </div>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Image src={Habbit} className="img-top"></Image>
      </Row>
    </div>
  );
}

export default Projects;
