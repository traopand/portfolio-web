import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Rectangle from "../images/rectangle.png";
import Rally from "../images/rally.png";
import ReactPlayer from "react-player";
import "../styles/Rally.css";

function Projects() {
  return (
    <div className="div-projects">
      <Row>
        <div className="projectheader">Rally:</div>
        <div className="slogan">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("For those who have something to fight for")
                .callFunction(() => {})
                .start();
            }}
          />
        </div>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Image src={Rally} className="img-top"></Image>
      </Row>

      <div className="paragraph">
        Rally is a mobile application that I developed alongside 3 Systems
        Design Engineering students as a part of Hack The North 2021. We had 36
        hours to develop our designs in figma and code our application. We used
        Reach Native to code the application.
      </div>

      <div className="subheading">Inspiration</div>
      <div className="paragraph">
        Looking back on 2020, we noticed that there was a huge shift towards
        speaking out and demanding change. We wanted to create a platform that
        would both connect passionate users with movements related to their
        beliefs as well as allow organizers to set-up their own events and reach
        attendees. The app aims to encourage individuals to speak out about what
        they believe in and bring together communities with a common goal in
        mind. We also wanted to inform protestors about key information as well
        as incorporate customization so that users are well-prepared for any
        upcoming protests.
      </div>
      <div className="subheading">What it does</div>
      <div className="paragraph">
        The app gives users access to key information about attending protests
        including First-Aid tips, Rights, and Protest Schedules/Routes. The home
        page operates as a widget screen in which each widget with contains a
        key piece of information or a customizable feature. Users can swap out
        widgets based on their needs. Additionally, the app allows users to
        search for protests and confirm their attendance, helping organizers
        gauge their audience size. The app also caters towards protest
        organizers and allows them to set up their own protests and post them
        either publicly or privately. Private protests will have restricted
        visibility and can only be joined through a QR code which is generated
        upon protest creation.
      </div>
      <div className="subheading">How we built it</div>
      <div className="paragraph">
        The app was built using React Native, JavaScript, Node.js and ReactJS.
        We used expo as an emulator and Figma to draft our designs. To divide
        the work, we decided to give each member an equal share of the workload,
        and partition the work so every member could work concurrently. This
        way, nobody was forced to slow down and wait for others. Since one of
        our group members was more comfortable with UI and graphic design, we
        thought it was the most efficient use of his talent to allocate most of
        the Figma designs to him, while the other 3 members worked on the code.
        This way we made the best use of all of our talents, to work as
        efficiently and as contentedly as possible.
      </div>
      <div className="subheading">Challenges we ran into</div>
      <div className="paragraph">
        We were also challenged by the remote-nature of the hackathon that
        forced us to find creative ways to work collaboratively, split up our
        code and finally put it all together. Given our limited experience
        working with the mentioned languages, debugging was challenging as we
        were unfamiliar with common errors and how to address them.
        Additionally, we had team-members working on both Android and iOS
        devices which made it difficult to combine the code given styling
        differences between the different devices.
      </div>
      <div className="subheading">Accomplishments that we're proud of</div>
      <div className="paragraph">
        Prior to this weekend, three of our members had never been exposed to
        React Native and two of our members were first time hackers! Given our
        limited experience, we are extremely proud of what we were able to
        accomplish in such short time.
      </div>
      <div className="subheading">What we learned</div>
      <div className="paragraph">
        We were able to develop a much stronger understanding of react-native
        including styling, screen navigation and state-hooks. We also gained
        experience working with Figma as a designing and prototyping tool that
        was crucial in the planning and execution of our app design. Besides the
        valuable technical skills we developed, we also developed strong
        communication, team-work and time-management skills. We learned to be
        resourceful and take every challenge as an opportunity to learn.
      </div>
      <div className="subheading">What's next for Rally</div>
      <div className="paragraph">
        We hope to be able to build upon our app through increased functionality
        in terms of profile and protest creation. Additionally we would like to
        incorporate direct communication with others through our app, which
        might be done by incorporating Signal's app interface. Signal is an
        encrypted messaging app that allows users to communicate directly and
        privately regarding protests and messages are deleted shortly after
        events to protect users. We also aim to improve accuracy of protest
        search by optimizing word detection and allowing advanced search options
        such as search by location. Overall we hope to maintain a positive and
        user-friendly environment for both individuals and organizers to come
        together and make a change in their local or greater community.
      </div>

      <div className="subheading">Product Demo</div>
      <Row style={{ justifyContent: "center" }}>
        <ReactPlayer url="https://youtu.be/eiIWh8It4XY" />
      </Row>

      <Row>
        <a href="/habbit" className="prev">
          <Col>Previous Project</Col>
        </a>

        <a className="next-disabled"></a>
      </Row>
    </div>
  );
}

export default Projects;
