import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Rectangle from "../images/rectangle.png";
import Splitpeas from "../images/splitpeas.png";
import Emma from "../images/Emma.png";
import sp1 from "../images/sp1.png";
import sp2 from "../images/sp2.png";
import sp3 from "../images/sp3.png";
import sp4 from "../images/sp4.png";
import sp5 from "../images/sp5.png";
import Wireframe from "../images/SplitpeasWireframe.png";
import "../styles/SplitPeas.css";
import ReactPlayer from "react-player";

function Projects() {
  return (
    <div className="div-projects">
      <Row>
        <div className="projectheader">SplitPeas:</div>
        <div className="slogan">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Save Food. Save Money. Save Time")
                .callFunction(() => {})
                .start();
            }}
          />
        </div>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Image src={Splitpeas} className="img-top"></Image>
      </Row>
      <br></br>
      <div className="paragraph">
        <b className="summary-splitpeas">💼 Role(s):</b> Software Developer,
        UI/UX Designer, UI/UX Researcher, Product Manager
        <br></br>
        <b className="summary-splitpeas">🛠️ Languages and Tools:</b> React
        Native, Javascript, Firebase, Figma
        <br></br>
        <b className="summary-splitpeas">🗓️ Timeline:</b> January - March 2021
        <br></br>
        <b className="summary-splitpeas">👥 Team:</b> Allie Dong, Amanda Yu,
        Tara Rao-Pandit, Tong Yin Han, and Zoey Wei
        <br></br>
        <br></br>
        <a
          href="https://github.com/traopand/split-peas"
          className="git-splitpeas"
          target="_blank"
        >
          <b className="summary-splitpeas">🔗 Github Repo</b>
        </a>
      </div>
      <br></br>
      <div className="paragraph">
        SplitPeas is a{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          mobile application{" "}
        </span>{" "}
        that I designed alongside four other UW students to help university
        students reduce stress around grocery shopping. SplitPeas offers
        students a{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>convenient</span>
        ,{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>reliable </span>{" "}
        and{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          time-efficient{" "}
        </span>{" "}
        way to split grocery trips and bills between roommates. We give our
        users the ability to track expiry dates and make the best use of their
        groceries. We list coupons for local grocery stores and a recipe bank
        for recipes with available groceries. Split-Peas. We help struggling
        students save time, money and food. The project was completed as a part
        of the Tech Under Twenty Cup 2021, over a three month period. In our
        group I helped design the{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          figma prototype{" "}
        </span>
        , code the{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>MVP </span> as
        well as conducting{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          user research
        </span>
        .
      </div>

      <br></br>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          verticalAlign: "center",
        }}
      >
        <div className="subheading" style={{ paddingRight: 50 }}>
          User Persona{" "}
        </div>
        <Image src={Emma} className="sp4"></Image>
      </Row>

      <div className="paragraph">
        Meet Emma. Emma is a second year University student who lives with three
        roommates. She is overwhelmed with lectures, homework,
        extra-curriculars, and adulting. While she tries to maintain a healthy
        lifestyle, more often than not, she doesn’t have enough time to go
        grocery shopping and instead frequently orders takeout, eats ramen, or
        skips meals. When she does find the time to go grocery shopping, she
        often has to buy in bulk and the food ends up expiring before she even
        cooks it. Emma represents our target audience, university students on a
        time crunch.
      </div>

      <br></br>

      <div className="subheading">User Research</div>
      <div className="paragraph">
        To gain a data-driven picture of our problem, we conducted research
        based on our target market university students. Below is one of the many
        questions we asked our target audience. According to our survey, grocery
        shopping is not only time consuming but also too expensive, food
        quantities are too large for one person and grocery management is too
        inconvenient for students.
      </div>

      <Row style={{ justifyContent: "center" }}>
        <Image src={sp1} className="sp1"></Image>
      </Row>

      <br></br>

      <div className="subheading">Competitive Analysis</div>
      <div className="paragraph">
        To determine the alternatives our customers currently operate under, we
        asked our users what their primary method of keeping track of groceries
        was and found that the majority of people either do not have a proper
        system or they simply jot down notes on their phones. These methods are
        not effective.
      </div>

      <Row style={{ justifyContent: "center" }}>
        <Image src={sp2} className="sp2"></Image>
      </Row>

      <div className="paragraph">
        While there are a few alternatives available to users, they are
        insufficient in providing convenience while reducing food wastage
        through accountability and household inventory management, and they lack
        the additions of coupons and recipes all catered to the needs of
        university students. Through our market research we have been able to
        identify and address key pressure points for university students,
        allowing an experience that alternatives cannot provide as seen in the
        chart.{" "}
      </div>
      <Row style={{ justifyContent: "center" }}>
        <Image src={sp3} className="sp3"></Image>
      </Row>

      <div className="paragraph">
        To gauge financial worth we asked users whether they would be willing to
        spend a little more on a grocery trip if it meant that they could reduce
        the number of trips per month. Our results as seen in the graph below
        showed the immense value of time to our target consumer group: students
        in the Waterloo region. For these students, even an extra hour or two in
        a busy week can optimize their weeks whether they spend it for an extra
        hour studying or for some much needed self care.
      </div>
      <Row style={{ justifyContent: "center" }}>
        <Image src={sp4} className="sp4"></Image>
      </Row>

      <br></br>

      <div className="subheading">Design Process </div>
      <div className="paragraph">
        After conducting our user and competitive research we had a strong idea
        of what features we wanted to include such as group list creation, bill
        splitting, food expiry tracking, local grocery store coupons and
        recipes. Below are sample designs that we made on figma for our
        dashboard, experimenting with color schemes to understand what was the
        easiest to read and navigate through, and finally the high-fidelity
        wireframes.
      </div>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          verticalAlign: "center",
        }}
      >
        <div className="subheading" style={{ paddingRight: 140 }}>
          Design Iterations{" "}
        </div>
        <Image src={sp5} className="sp4"></Image>
      </Row>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          verticalAlign: "center",
        }}
      >
        <div className="subheading" style={{ paddingRight: 50 }}>
          High Fidelity Wireframes{" "}
        </div>
        <Image src={Wireframe} className="sp4"></Image>
      </Row>
      <div className="subheading">Product Demo</div>
      <Row style={{ justifyContent: "center" }}>
        <ReactPlayer url="https://youtu.be/KXNlwwRgAI4" />
      </Row>
      <Row>
        <a href="/quicktab" className="prev">
          <Col>Previous Project</Col>
        </a>

        <a href="/rally" className="next">
          <Col>Next Project</Col>
        </a>
      </Row>
    </div>
  );
}

export default Projects;
