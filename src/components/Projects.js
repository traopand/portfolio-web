import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Tara from "../images/tara.png";
import Linkedin from "../images/linkedin.png";
import Devpost from "../images/devpost.png";
import Github from "../images/github.png";
import Typewriter from "typewriter-effect";
import "../styles/Projects.css";
import Rectangle from "../images/rectangle.png";
import Habbit from "../images/habbit.png";
import Rally from "../images/rally.png";
import Splitpeas from "../images/splitpeas.png";
import Quicktab from "../images/quicktab.png";

function Projects() {
  return (
    <div className="div-projects">
      <div className="projects-header">Recent Projects</div>
      <Row style={{ justifyContent: "center" }}>
        <a href="/splitpeas">
          <Image src={Splitpeas} className="rectangle"></Image>
        </a>
        <a href="/quicktab">
          <Image src={Quicktab} className="rectangle"></Image>
        </a>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <a href="/habbit">
          <Image src={Habbit} className="rectangle"></Image>
        </a>
        <a href="/rally">
          <Image src={Rally} className="rectangle"></Image>
        </a>
      </Row>
    </div>
  );
}

export default Projects;
