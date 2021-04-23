import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Rectangle from "../images/rectangle.png";
import Splitpeas from "../images/splitpeas.png";

import "../styles/SplitPeas.css";

function Projects() {
  return (
    <div className="div-projects">
      <Row>
        <div className="projects-header">SplitPeas:</div>
        <div className="slogan">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Save Food. Save Money. Save Time")
                .callFunction(() => {})
                .start();
            }}
          />
        </div>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Image src={Splitpeas} className="img-top"></Image>
      </Row>
    </div>
  );
}

export default Projects;
