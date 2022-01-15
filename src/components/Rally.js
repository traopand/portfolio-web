import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Rectangle from "../images/rectangle.png";
import Rally from "../images/rally.png";
import Wireframe from "../images/rallyWireframe.png";
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
      <br></br>
      <div className="paragraph">
        <b className="summary-rally">💼 Role(s):</b> Software Developer, UI/UX
        Designer
        <br></br>
        <b className="summary-rally">🛠️ Languages and Tools:</b> React Native,
        Javascript, Figma
        <br></br>
        <b className="summary-rally">🗓️ Timeline:</b> January 15-17 2021
        <br></br>
        <b className="summary-quicktab">👥 Team:</b> Christine Ng, Christopher
        Oka, Ian Schulte, and Tara Rao-Pandit
        <br></br>
        <br></br>
        <a
          href="https://github.com/traopand/rally"
          className="git-rally"
          target="_blank"
        >
          <b className="summary-rally">Github Repo 🔗</b>
        </a>
      </div>
      <br></br>
      <div className="paragraph">
        Rally is a{" "}
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
          mobile application{" "}
        </span>{" "}
        that I developed alongside 3 Systems Design Engineering students as a
        part of Hack The North 2021. We had 36 hours to develop our designs in
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
          {" "}
          Figma{" "}
        </span>{" "}
        and code our application. We used{" "}
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
          React Native{" "}
        </span>
        to code the application.
      </div>

      <div className="subheading">Inspiration</div>
      <div className="paragraph">
        Looking back on 2020, we noticed that there was a huge shift towards{" "}
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
          speaking out{" "}
        </span>
        and{" "}
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
          demanding change{" "}
        </span>
        . We wanted to create a{" "}
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>platform </span>{" "}
        that would both{" "}
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
          connect passionate users with movements{" "}
        </span>{" "}
        related to their beliefs as well as{" "}
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
          allow organizers to set-up their own events{" "}
        </span>{" "}
        and reach attendees. The app aims to encourage individuals to speak out
        about what they believe in and bring together communities with a common
        goal in mind. We also wanted to inform protestors about key information
        as well as incorporate customization so that users are well-prepared for
        any upcoming protests.
      </div>
      <div className="subheading">Key Features</div>
      <div className="paragraph">
        <ul>
          <li>
            Gives users access to key information about attending protests
            including First-Aid tips, Rights, and Protest Schedules/Routes
          </li>
          <li>Customizable widget screen, with personalized widgets</li>
          <li>Protest search page that allows users to confirm attendence</li>
          <li>
            Protest organizers can set up their own ones and post either
            publicly or privately (secured through a QR code)
          </li>
        </ul>
      </div>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          verticalAlign: "center",
        }}
      >
        <div className="subheading" style={{ paddingRight: 50 }}>
          Wireframes{" "}
        </div>
        <Image src={Wireframe} className="img-wireframes"></Image>
      </Row>

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
        We were also challenged by the{" "}
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
          remote-nature{" "}
        </span>{" "}
        of the hackathon that forced us to find{" "}
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
          creative ways{" "}
        </span>{" "}
        to work{" "}
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
          collaboratively{" "}
        </span>{" "}
        , split up our code and finally put it all together. Given our limited
        experience working with the mentioned languages,
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
          debugging{" "}
        </span>{" "}
        was challenging as we were unfamiliar with common errors and how to
        address them. Additionally, we had team-members working on both{" "}
        <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
          Android and iOS{" "}
        </span>{" "}
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
        <ul>
          <li>
            We were able to develop a much stronger understanding of
            react-native including{" "}
            <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
              styling
            </span>
            ,{" "}
            <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
              screen navigation{" "}
            </span>{" "}
            and{" "}
            <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
              state-hooks{" "}
            </span>{" "}
          </li>
          <li>
            We also gained experience working with{" "}
            <span style={{ color: "#ED7B82", fontWeight: "bold" }}>Figma </span>{" "}
            as a designing and prototyping tool that was crucial in the planning
            and execution of our app design
          </li>
          <li>Communication, team-work and time-management skills</li>
          <li>
            We learned to be{" "}
            <span style={{ color: "#ED7B82", fontWeight: "bold" }}>
              resourceful{" "}
            </span>{" "}
            and take every challenge as an opportunity to learn
          </li>
        </ul>
      </div>
      <div className="subheading">Next Steps</div>

      <div className="paragraph">
        <ul>
          <li> Increase functionality of profile and protest creation</li>
          <li>
            Incorporate direct communication with others through our app, which
            might be done by incorporating Signal's app interface to ensure
            private and secure messaging
          </li>
          <li>
            Imorove accuracy of protest search through the addition of advanced
            search options (e.g. filtering by location)
          </li>
        </ul>
        Overall we hope to maintain a positive and user-friendly environment for
        both individuals and organizers to come together and make a change in
        their local or greater community.
      </div>

      <div className="subheading">Product Demo</div>
      <Row style={{ justifyContent: "center" }}>
        <ReactPlayer url="https://youtu.be/eiIWh8It4XY" />
      </Row>

      <Row>
        <a href="/splitpeas" className="prev">
          <Col>Previous Project</Col>
        </a>

        <a href="/habbit" className="next">
          <Col>Next Project</Col>
        </a>
      </Row>
    </div>
  );
}

export default Projects;
