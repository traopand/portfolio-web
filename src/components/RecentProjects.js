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
        <div className="grid">
          <div className="quicktab">
            <a href="/quicktab">
              <Image src={Quicktab} className="img-quicktab"></Image>
            </a>
            <div class="overlay-quicktab">
              <div class="text">
                Software Developer @ Quicktab - Development of landing page
                redesign, restaurant web platform and QR code internal tool.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="splitpeas">
            <a href="/splitpeas">
              <Image src={Splitpeas} className="img-splitpeas"></Image>
            </a>
            <div class="overlay-splitpeas">
              <div class="text">
                SplitPeas - A mobile application designed to help university
                students save money, time and reduce food waste through group
                grocery shopping.
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <div className="grid">
          <div className="rally">
            <a href="/rally">
              <Image src={Rally} className="img-rally"></Image>
            </a>
            <div class="overlay-rally">
              <div class="text">
                Rally - A mobile application developed to connect passionate
                individuals and encourage safe and positive activism in the
                community.
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="habbit">
            <a href="/habbit">
              <Image src={Habbit} className="img-habbit"></Image>
            </a>
            <div class="overlay-habbit">
              <div class="text">
                {" "}
                Habbit - A mobile application aimed to educate young girls about
                finance while managing their spending, earnings, and savings.{" "}
              </div>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Projects;
