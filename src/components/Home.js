import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Tara from "../images/tara.png";
import Linkedin from "../images/linkedin.png";
import Devpost from "../images/devpost.png";
import Github from "../images/github.png";
import About from "./About";
import Projects from "./RecentProjects";

import "../styles/Home.css";
function Home() {
  return (
    <div>
      <About />
      <div className="div-project-grid">
        <div className="take-look">
          <a href="#projects" className="take-look">
            Take a look at what I've been working on ⬇
          </a>
        </div>
        <Projects />
      </div>
    </div>
  );
}

export default Home;
