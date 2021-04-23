import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Tara from "../images/tara.png";
import Linkedin from "../images/linkedin.png";
import Devpost from "../images/devpost.png";
import Github from "../images/github.png";
import Typewriter from "typewriter-effect";
import About from "./About";
import RecentProjects from "./RecentProjects";

import "../styles/Home.css";
function Home() {
  return (
    <div>
      <About />
      <RecentProjects />
    </div>
  );
}

export default Home;
