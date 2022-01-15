import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Tara from "../images/tara-drawing.png";
import Linkedin from "../images/linkedin.png";
import Mail from "../images/mail.png";
import Github from "../images/github.png";
import Typewriter from "typewriter-effect";
import Footer from "./Footer"; 
import "../styles/Home.css";

function About() {
  return (
    <div>
    <div className="div-intro">
    
          <Image src={Tara} className="image-tara" />
      <Row className="intro">
        <Col className="center">
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
            <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
              Systems Design Engineering
            </span>{" "}
            student at The University of Waterloo with a passion for developing{" "}
            <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
              accessible{" "}
            </span>{" "}
            and{" "}
            <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
              user-focused{" "}
            </span>{" "}
            technology.
            <br />
            <br />
            I'm currently looking for
            <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
              {" "}
              Summer 2022
            </span>{" "}
            internship opportunities to expand my skills and am interested in{" "}
            <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
              web/app development
            </span>
            , and{" "}
            <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
              UI/UX design
            </span>
            .
          </div>
        </Col>
      </Row>
   
    </div>
    <Footer />
    </div>


  );
}

export default About;
