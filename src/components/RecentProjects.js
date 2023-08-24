import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Tara from "../images/tara.png";
import Linkedin from "../images/linkedin.png";
import Mail from "../images/mail.png";
import Github from "../images/github.png";
import "../styles/Projects.css";
import Rectangle from "../images/rectangle.png";
import Habbit from "../images/habbit.png";
import SolarIrrigation from "../images/SolarIrrigation.png";
import Rally from "../images/rally.png";
import Splitpeas from "../images/splitpeas.png";
import Quicktab from "../images/quicktab.png";
import Shinydocs from "../images/shinydocs.png";
import Tunely from "../images/tunely.png";
import MegaCart from "../images/MegaCartCleanup.png";
import PocketCloset from "../images/PocketCloset.png";
import Faire from "../images/Faire.png";
import MyProjects from "../images/my-projects.png"; 

function Projects() {
  return (
    <div className="div-projects-grid">
      <Row style={{ justifyContent: "center", paddingBottom: 5 }}>
      <Image src={MyProjects} className="my-projects"></Image>
      </Row>     <Row style={{ justifyContent: "center" }}>
        <div className="grid" id="projects">
          <div className="shinydocs">
            <a href="/megacartcleanup">
              <Image src={MegaCart} className="img-projects"></Image>
            </a>
            <div class="overlay-shinydocs">
              <div class="text">
                {" "}
                <b> Frontend and Design @ Faire</b> | Jan - Apr 2023{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="grid" id="projects">
          <div className="shinydocs">
            <a href="/megacartcleanup">
              <Image src={SolarIrrigation} className="img-projects"></Image>
            </a>
            <div class="overlay-shinydocs">
              <div class="text">
                {" "}
                <b> Frontend and Design @ Faire</b> | Jan - Apr 2023{" "}
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row style={{ justifyContent: "center" }}>
      <div className="grid">
          <div className="tunely">
            <a href="/pocketcloset">
              <Image src={PocketCloset} className="img-projects"></Image>
            </a>
            <div class="overlay-tunely">
              <div class="text">
                <b>Tunely</b> | Sep - Dec 2021
              </div>
            </div>
          </div>
        </div>
      <div className="grid">
          <div className="tunely">
            <a href="/faire">
              <Image src={Faire} className="img-projects"></Image>
            </a>
            <div class="overlay-tunely">
              <div class="text">
                <b>Tunely</b> | Sep - Dec 2021
              </div>
            </div>
          </div>
        </div>
       
      </Row>
      <Row style={{ justifyContent: "center" }}>
      <div className="grid" id="projects">
          <div className="shinydocs">
            <a href="/shinydocs">
              <Image src={Shinydocs} className="img-projects"></Image>
            </a>
            <div class="overlay-shinydocs">
              <div class="text">
                {" "}
                <b> Software Developer @ Shinydocs </b> | Sep - Dec 2021{" "}
              </div>
            </div>
          </div>
        </div>
      <div className="grid">
          <div className="tunely">
            <a href="/tunely">
              <Image src={Tunely} className="img-projects"></Image>
            </a>
            <div class="overlay-tunely">
              <div class="text">
                <b>Tunely</b> | Sep - Dec 2021
              </div>
            </div>
          </div>
        </div>
       
        
      </Row>
      <Row style={{ justifyContent: "center" }}>
      <div className="grid">
          <div className="quicktab">
            <a href="/quicktab">
              <Image src={Quicktab} className="img-projects"></Image>
            </a>
            <div class="overlay-quicktab">
              <div class="text">
                <b>Software Developer @ Quicktab</b> | Jan - Apr 2021
              </div>
            </div>
          </div>
        </div>
      <div className="grid">
          <div className="splitpeas">
            <a href="/splitpeas">
              <Image src={Splitpeas} className="img-projects"></Image>
            </a>
            <div class="overlay-splitpeas">
              <div class="text">
                <b>SplitPeas</b> | Jan - Mar 2021
              </div>
            </div>
          </div>
        </div>
       
       
      </Row>
      <Row style={{ justifyContent: "center" }}>
      <div className="grid">
          <div className="rally">
            <a href="/rally">
              <Image src={Rally} className="img-projects"></Image>
            </a>
            <div class="overlay-rally">
              <div class="text">
                <b>Rally</b> | Jan 2021
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="habbit">
            <a href="/habbit">
              <Image src={Habbit} className="img-projects"></Image>
            </a>
            <div class="overlay-habbit">
              <div class="text">
                <b>Habbit</b> | Jan 2021
              </div>
            </div>
          </div>
        </div></Row>
    </div>
  );
}

export default Projects;
