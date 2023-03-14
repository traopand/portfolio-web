import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Tara from "../images/tara.JPG";
import Linkedin from "../images/linkedin.png";
import Devpost from "../images/devpost.png";
import Github from "../images/github.png";
import Typewriter from "typewriter-effect";
import Concert from "../images/concert.png";
import Piano from "../images/piano.png";
import Dance from "../images/dance.png";
import about from "../images/img-about.png"; 
import Walk from "../images/walk.png"; 
import interests from "../images/my-interests.png"; 
import interestTitle from "../images/interest-title.png"; 
import "../styles/About.css";
import MySkills from "./MySkills";

function About() {
  return (
    <div>
    <div className="div-about">
      <Row style={{alignItems: "center", paddingLeft: 30, paddingRight:30}}>
      <Image src={about} className="img-about"/>
        <Col className="first-about">
          <div className="subtext">
            Hi! I’m Tara, a second-year  <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          systems design engineering student {" "}
        </span>at
            the University of Waterloo. I’ve always been interested in the
            combination of  <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          logic{" "}
        </span> and  <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          creativity{" "}
        </span> to solve problems which is why I
            knew engineering would be the perfect fit for me!
            <br />
            <br />
            I made this website to help showcase my projects and as a way to
            <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}encourage{" "}
        </span> myself to continue developing and getting involved in new
            projects. I coded this website from scratch using  <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          React JS{" "}
        </span> and  <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          CSS
        </span>.
            <br />
            <br />
            </div>
            </Col>
            </Row>
           
           
           
           
            <Row style={{alignItems: "center", paddingLeft: 30, paddingRight:30}}>
        <Col className="sec-about">
        <div className="subtext">
            I am a <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}self-motivated{" "}
        </span> and <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}hardworking{" "}
        </span> individual with a passion for
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}learning
        </span>. I am specifically interested in exploring software through
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}web{" "}
        </span> or <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}mobile app development{" "}
        </span> and the <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}UI/UX{" "}
        </span> design process that goes
            into development.
            <br />
            <br />I recently finished an <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}internship{" "}
        </span> as a <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}UI-focused Software Developer{" "}
        </span> at
            Shinydocs and am looking for Fall 2023 internships. I am always
            looking for opportunities to challenge myself and further expand on
            my existing knowledge; feel free to reach out to me at any time!
            <br />
            <br />
            Outside, of school and work, I love doing anything <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}creative{" "}
        </span> and
            music related! I play guitar and piano, love to dance and enjoy
            going to concerts!
            
            </div>
            </Col>
            <Col className="int-about">
            <div className-="interests-overlay">
            <Image src={interestTitle} className="interest-title"/>

            <Carousel className="carousel-grp" autoPlay interval="2000">
         
          <Carousel.Item>
            <img src={Piano} className="int-carousel" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Dance} className="int-carousel" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Concert} className="int-carousel" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Walk} className="int-carousel" />
          </Carousel.Item>
        </Carousel>
        </div>
        </Col>
    
    
            </Row>  
           
          
          
    
    </div>
    </div>
  );
}

export default About;
