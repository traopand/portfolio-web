import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Tara from "../images/tara.JPG";
import Linkedin from "../images/linkedin.png";
import Devpost from "../images/devpost.png";
import Github from "../images/github.png";
import Typewriter from "typewriter-effect";
import Concert from "../images/concert.jpg";
import Piano from "../images/piano.png";
import Dance from "../images/dance.png";
import "../styles/About.css";
import MySkills from "./MySkills";

function About() {
  return (
    <div className="div-about">
      <Row xs={8} md={4} style={{ display: "flex", justifyContent: "center" }}>
        <Image src={Tara} className="image-tara2" />
      </Row>
      <Row
        className="about"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col xs={12} md={8}>
          <div className="subtext">
            Hi! I’m Tara, a second-year systems design engineering student at
            the University of Waterloo. I’ve always been interested in the
            combination of logic and creativity to solve problems which is why I
            knew engineering would be the perfect fit for me!
            <br />
            <br />
            I made this website to help showcase my projects and as a way to
            encourage myself to continue developing and getting involved in new
            projects. I coded this website from scratch using React JS and CSS.
            <br />
            <br />
            I am a self-motivated and hardworking individual with a passion for
            learning. I am specifically interested in exploring software through
            web or mobile app development and the UI/UX design process that goes
            into development.
            <br />
            <br />I recently finished an internship as a software developer at
            Shinydocs and am looking for Summer 2022 internships. I am always
            looking for opportunities to challenge myself and further expand on
            my existing knowledge; feel free to reach out to me at any time!
            <br />
            <br />
            Outside, of school and work, I love doing anything creative and
            music related! I play guitar and piano, love to dance and enjoy
            going to concerts!
            <Row style={{ padding: 20, justifyContent: "center" }}>
              <img
                src={Dance}
                style={{ width: "300px", height: "auto", padding: 10 }}
              />
              <img
                src={Piano}
                style={{ width: "300px", height: "auto", padding: 10 }}
              />
              <img
                src={Concert}
                style={{ width: "300px", height: "auto", padding: 10 }}
              />
            </Row>
          </div>
        </Col>
      </Row>
      <MySkills />
    </div>
  );
}

export default About;
