import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Rectangle from "../images/rectangle.png";
import Shinydocs from "../images/shinydocsBanner.png";
import Treeview from "../images/Treeview.png";
import ReactPlayer from "react-player";
import "../styles/Tunely.css";

function Projects() {
  return (
    <div className="div-projects">
      <Row>
        <div className="projectheader">Shinydocs:</div>
        <div className="slogan">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Front-end Software Developer")
                .callFunction(() => {})
                .start();
            }}
          />
        </div>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Image src={Shinydocs} className="img-top"></Image>
      </Row>
      <br></br>
      <div className="paragraph">
        <b className="summary-quicktab">💼 Role(s):</b> Front-end Developer
        <br></br>
        <b className="summary-quicktab">🛠️ Languages and Tools:</b> React,
        TypeScript
        <br></br>
        <b className="summary-quicktab">🗓️ Timeline:</b> September - December
        2021
      </div>
      <br></br>
      <div className="paragraph">
        From September to December of 2021, I completed an internship at
        Shinydocs as a <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}Front-End Software Developer
        </span>. I primarily worked on
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}building
        </span>, <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}testing{" "}
        </span> and <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}documenting{" "}
        </span>an <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}accessible UI Library{" "}
        </span> that was
        used across all company platforms.
      </div>
      <div className="subheading">The UI Library</div>
      <div className="paragraph">
        Prior to working with Shinydocs, I had experience working with external
        libraries such as <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}React Bootstrap{" "}
        </span> or <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}Material UI
        </span>, when developing
        platforms. However, what I didn’t realize was the amount of effort that
        goes into the development of such libraries that allow developers to
        seamlessly build. I developed fully accessible components including a
        treeview, dropzone, tabs, and more from scratch using React and
        Typescript.
      </div>
      <div className="subheading">The Treeview</div>
      <div className="paragraph">
        {" "}
        Among all of the components I worked on, I'm most proud of the <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}treeview{" "}
        </span>
        as it not only challenged my technological abilities but gave me the
        opportunity to apply theoretical concepts such as a<span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}depth-first search{" "}
        </span> to a real-life use
        case. It's a UI component that visually displays nested arrays in an
        organized and intuitive manner with accessible integration for an easy
        user experience.
      </div>
      <img className="img-top" src={Treeview} />

      <div className="subheading">Key Features</div>
      <div className="paragraph">
        <ul>
          <li>
            Arrow key functionality allows accessible navigation through
            component
          </li>
          <li>
            Customizable styling including a choice between folder and chevron
            icons
          </li>
          <li>Dark and light mode styling</li>
          <li>
            Users can input a nested array of data and the component will
            display accordingly
          </li>
          <li>
            Functionality and accessibility tests added as per the WAI-ARIA
            requirements
          </li>
        </ul>
      </div>

      <div className="subheading">Testing and Documentation</div>
      <div className="paragraph">
        Another key part of my work on the UI library was it's maintenance, throught the development of <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}unit tests{" "} </span> and <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}documentation
        </span>. Across the term, I completed <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}over 150 unit tests{" "}
        </span> using the <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}React Testing Library{" "}
        </span> and <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}Jest
        </span>. This resulted in an increase in project test coverage by around <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}14%
        </span>. Prior to this experience, I had never written a unit test and didn't consider the impact of unit testing on front-end components. I had relied on manual testing on my machine, but after working with Shinydocs I quickly realized the importance of writing quality tests. I also learned about testing practices including<span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}test-driven development
        </span>, which I found quite interesting. Furthermore, through writing the<span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}documentation{" "}
        </span>  of over 10 components, I realized the true importance of it. Having a clearly documented UI component with descriptions of all props, allowed for other developers to take full advantage of the component, and provide a <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}seamless development experience
        </span>. 
      </div>

      <div className="subheading">Accessibility</div>
      <div className="paragraph">I think the most important thing I learned from my time at Shinydocs, was how to make UI components <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}accessible
        </span>. We use the <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}WAI-ARIA{" "}
        </span>guidelines to ensure that every component we were developing was fully accessible. This would ensure that developers using our components would successfully build fully <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
            {" "}accessible digital experiences{" "}
        </span> for all users. I really enjoyed being able to develop accessible components, as it made me feel happy knowing that a user's experience would not be diminished as a result of any limitations such as visual impairement.</div>
      <br/>
      <div className="paragraph"> 
 </div>

 <div className="subheading">Performance</div>
 <div className="paragraph">Overall, I thoroughly enjoyed my time at Shinydocs and developed invaluable skills in a challenging and supportive environment. 
 I received positive feedback from those around me, and was always encouraged to reach out for help.</div>
     <br />
 <div className="recommendation">“Tara joined the company during a time where we were isolated from the office. 
 She was new to the business, the teams, and products, and is still in the early stages of her career. 
 Despite all of this, she was able to get up to speed with a <span><b>minimum amount of help</b></span>, 
 and still made <span><b>large contributions</b></span> to our codebase. For this reason, I rate her <span><b>self-management</b></span> to be one of her strengths. 
 She was always willing to tackle <span><b>complicated problems</b></span> and didn't shy away from the more difficult tasks. Tara spent a lot of time <span><b>working in concert</b></span> with either a more senior developer or 
 her fellow coop to deliver features that improved our products immensely.”</div>
 <br />
<div className="recommendation">"Tara is an <span><b>outstanding developer</b></span> and a great person to work with. She is <span><b>dedicated</b></span>, <span><b>skilled</b></span>, <span><b>communicates</b></span> her thoughts effectively 
and we were lucky to have her. I would happily have her come work with us again. I wish her luck in her future endeavours, regardless of where she ends up."</div>
 
 <div className="rec-name">- Duan Bailey, Manager</div>
      <Row>
        <a className="prev">
          <Col style={{ visibility: "hidden", pointerEvents: "none" }}>
            Previous Project
          </Col>
        </a>

        <a href="/tunely" className="next">
          <Col>Next Project</Col>
        </a>
      </Row>
    </div>
  );
}

export default Projects;
