import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Rectangle from "../images/rectangle.png";
import Tunely from "../images/tunely.png";
import hiFi from "../images/TunelyHi-fi.png";
import loFi from "../images/TunelyLo-fi.png";
import PrimaryUser from "../images/PrimaryUser.png";
import SecondaryUser from "../images/SecondaryUser.png";
import Wireframe from "../images/TunelyWireframe.png";
import ReactPlayer from "react-player";
import "../styles/Tunely.css";

function Projects() {
  return (
    <div className="div-projects">
      <Row>
        <div className="projectheader">Tunely:</div>
        <div className="slogan">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Find and share new music picks")
                .callFunction(() => {})
                .start();
            }}
          />
        </div>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Image src={Tunely} className="img-top"></Image>
      </Row>
      <br></br>
      <div className="paragraph">
        <b className="summary-quicktab">💼 Role(s):</b> UI Designer
        <br></br>
        <b className="summary-quicktab">🛠️ Languages and Tools:</b> Figma
        <br></br>
        <b className="summary-quicktab">🗓️ Timeline:</b> September - December
        2021
      </div>
      <div className="paragraph">
      <br></br>
      <b className="summary-quicktab">👥 Team:</b> Ena Manjgo and Tara
      Rao-Pandit
      <br></br>
      </div>
      <div className="subheading">The Challenge</div>
      <div className="paragraph">
        Finding new music is a task with more resistance than necessary.
        Scrolling through music app recommendations only to try and “skip to the
        good part” is time-consuming and sometimes a little bit boring. Our team
        sought out to make music exploration fun and curated experience.
      </div>
      <div className="subheading">The Idea</div>
      <div className="paragraph">
        Tunely is a mobile app that offers a fun, fast-paced, and social
        solution. Its main function—feeding the user music snippets that they
        can swipe right to save, or swipe left to discard— takes all the work
        out of finding and sharing songs.
      </div>
      <div className="subheading">Defining the Problem</div>
      <div className="paragraph">
        To better understand the problem space, we identified the pain points in
        browsing song recommendations:
        <ul>
          <li>
            Sharing music with friends is cross-platform (i.e. sending links)
          </li>
          <li>Music app recommendation algorithms are typically inaccurate</li>
          <li>
            Skipping to the most interesting part of the song is a long process
            of trial and error
          </li>
          <li>Adding songs to playlists can be cumbersome</li>
        </ul>
      </div>
      <div className="subheading">Setting Requirements</div>
      <div className="paragraph">
        We then listed some app requirements:
        <ol>
          <li>Seamless chat functionality to share songs with friends</li>
          <li>
            A data-entry stage for accurate, algorithm-based recommendations
          </li>
          <li>
            Algorithm-curated song snippets to show the user the most
            interesting part of the song
          </li>
          <li>A card-swiping interface to speed up the browsing process</li>
        </ol>
      </div>
      <div className="subheading">User Personas</div>
      <div className="paragraph">
        We then considered the main users of our mobile app.
      </div>
      <Row style={{ paddingTop: 20, fontWeight: "bold", fontSize: 18 }}>
        <Col>
          <div>
            <u>Primary User</u>
          </div>
          <div>
            <Image src={PrimaryUser} className="img-persona"></Image>
          </div>
        </Col>
        <Col>
          <div>
            <u>Secondary User</u>
          </div>
          <div>
            <Image src={SecondaryUser} className="img-persona"></Image>
          </div>
        </Col>
      </Row>
      <div className="subheading">Updated Requirements</div>
      <div className="paragraph">
        <ol>
          <li>Seamless chat functionality to share songs with friends</li>
          <li>
            A data-entry stage for accurate, algorithm-based recommendations
          </li>
          <li>
            Algorithm-curated song snippets to show the user the most
            interesting part of the song
          </li>
          <li>A card-swiping interface to speed up the browsing process</li>
        </ol>
      </div>
      <div className="subheading">Information Architecture</div>
      <div className="paragraph">
        To get a clearer understanding of the user flow, we developed an
        information architecture diagram. This demonstrates how the user
        navigates information through our application.
      </div>
      <Image src={loFi} className="img-top"></Image>
      <div className="subheading">Low Fidelity Wireframes</div>
      <div className="paragraph">
        After understanding the information architecture, we developed
        low-fidelity wireframes to get a clear picture of the layout and
        organization of the app. This allowed us to ensure a seamless user
        experience from screen to screen, without worrying about visuals.
      </div>
      <Image src={Wireframe} className="img-top"></Image>
      <div className="subheading">Iterating on the Low Fidelity Wireframe</div>
      <div className="paragraph">
        Once complete, we noticed missing features of the current wireframe.
        These include:
        <ul>
          <li>A centralized settings tab</li>
          <li>A sequence of onboarding frames to gather user information</li>
          <li>
            Options to allow app access to contacts and configure notifications
          </li>
        </ul>
      </div>
      <div className="subheading">High Fidelity Wireframes</div>
      <Image src={hiFi} className="img-top"></Image>
      <div className="subheading">Prototype</div>
      <Row style={{ justifyContent: "center" }}>
        <ReactPlayer url="https://youtu.be/iNpdGW3Cfpg" />
      </Row>
      <Row>
        <a href="/shinydocs" className="prev">
          <Col>Previous Project</Col>
        </a>

        <a href="/quicktab" className="next">
          <Col>Next Project</Col>
        </a>
      </Row>
    </div>
  );
}

export default Projects;
