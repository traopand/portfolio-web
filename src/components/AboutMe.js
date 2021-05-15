import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Tara from "../images/tara.png";
import Linkedin from "../images/linkedin.png";
import Devpost from "../images/devpost.png";
import Github from "../images/github.png";
import Typewriter from "typewriter-effect";
import "../styles/About.css";
import MySkills from "./MySkills";

function About() {
  return (
    <div className="div-about">
      <Row className="about">
        <Col xs={8} md={4}>
          <Image src={Tara} className="image-tara2" />
        </Col>
        <Col xs={12} md={8}>
          <div className="header"> About Me :) </div>

          <div className="subtext">
            Hi! I’m Tara, a first-year systems design engineering student at the
            University of Waterloo. I’ve always been interested in the
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
            web or mobile app development and the UI/UX design process. Outside
            of work, I have a passion for music and love playing both piano and
            guitar. I also enjoy playing tennis, crafting, and hiking!
            <br />
            <br />I recently finished an internship as a software developer and
            am looking for Fall 2021 internships. I am always looking for
            opportunities to challenge myself and further expand on my existing
            knowledge; feel free to reach out to me at any time!
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

      <MySkills />
    </div>
  );
}

export default About;
