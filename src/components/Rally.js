import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Rectangle from "../images/rectangle.png";
import Rally from "../images/rally.png";

import "../styles/Rally.css";

function Projects() {
  return (
    <div className="div-projects">
      <Row>
        <div className="projects-header">Rally:</div>
        <div className="slogan">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("For those who have something to fight for")
                .callFunction(() => {})
                .start();
            }}
          />
        </div>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Image src={Rally} className="img-top"></Image>
      </Row>
    </div>
  );
}

export default Projects;
