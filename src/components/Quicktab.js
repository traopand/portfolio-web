import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Typewriter from "typewriter-effect";
import Rectangle from "../images/rectangle.png";
import Quicktab from "../images/quicktab.png";
import Quicktab1 from "../images/quicktab1.png";
import Quicktab2 from "../images/quicktab2.png";
import Quicktab3 from "../images/quicktab3.png";
import Quicktab4 from "../images/quicktab4.png";
import Quicktab5 from "../images/quicktab5.png";
import Quicktab6 from "../images/quicktab6.png";
import Quicktab7 from "../images/quicktab7.png";
import "../styles/Quicktab.css";

function Projects() {
  return (
    <div className="div-projects">
      <Row>
        <div className="projectheader">Quicktab:</div>
        <div className="slogan">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("My experience as a software developer intern")
                .callFunction(() => {})
                .start();
            }}
          />
        </div>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Image src={Quicktab} className="img-top"></Image>
      </Row>
      <br></br>
      <div className="paragraph">
        <b className="summary-quicktab">💼 Role(s):</b> Full-Stack Software
        Developer
        <br></br>
        <b className="summary-quicktab">🛠️ Languages and Tools:</b> React JS,
        Javascript, Firebase, HTML/CSS, Adobe XD
        <br></br>
        <b className="summary-quicktab">🗓️ Timeline:</b> January-April 2021
      </div>
      <br></br>

      <div className="paragraph">
        From January to April 2021 I completed an{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          internship{" "}
        </span>{" "}
        at{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>Quicktab</span>,
        a start-up company developing an application that allows restaurants to
        facilitate{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          contactless dining
        </span>
        . Users can virtually join a table once seated in the restaurant and
        order items from their own or restaurant-provided devices using the
        application. They have also developed a restaurant side for the platform
        that allows servers to see what tables have ordered and send these
        orders to the kitchen as well as view billing information. My main
        projects included working on coding the{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>redesign </span>{" "}
        for my company’s website and further developing their restaurant
        platform. I worked with react, CSS, javascript, and firebase.
      </div>

      <br></br>

      <div className="subheading">Challenges I faced </div>
      <div className="paragraph">
        Given that I had{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          no prior experience{" "}
        </span>{" "}
        working with{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>React</span>,{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>Javascript</span>
        , or{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>Firebase </span>{" "}
        before starting my work term it was a huge challenge for me to develop
        these skills while implementing them in my tasks. However, I was able to
        demonstrate strong{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          self-management{" "}
        </span>{" "}
        and{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          technical agility{" "}
        </span>{" "}
        as I picked up the required skills and was able to successfully complete
        my projects on time. Additionally, with the work term being{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>remote </span> I
        had to become more{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          resourceful{" "}
        </span>{" "}
        and{" "}
        <span style={{ color: "#8FB77D", fontWeight: "bold" }}>
          independent{" "}
        </span>{" "}
        in solving my technical problems.
      </div>

      <br></br>

      <div className="subheading">Landing Page Redesign </div>
      <div className="paragraph">
        My first major project was coding the redesign of the Quicktab website
        using React JS alongside another software developer. As seen in the
        images below, I coded the header, For Restaurants, For Guests, About
        Quicktab, and FAQ pages. In addition, I implemented a blog feature to
        allow the company to post updates and new releases. View the website
        <a
          href="https://quicktab.ca/"
          style={{ color: "black" }}
          target="_blank"
        >
          {" "}
          <u> here</u>.
        </a>
      </div>
      <br></br>
      <Row style={{ justifyContent: "center" }}>
        <Carousel>
          <Carousel.Item>
            <img src={Quicktab1} className="img-carousel" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Quicktab2} className="img-carousel" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Quicktab3} className="img-carousel" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={Quicktab4} className="img-carousel" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={Quicktab5} className="img-carousel" />
          </Carousel.Item>
        </Carousel>
      </Row>
      <br></br>

      <div className="subheading">Restaurant Web App Redesign </div>
      <div className="paragraph">
        I was also part of the Restaurant Web App development team. In this
        team, I helped code the restaurant side of their platform allowing
        servers to manage orders. I coded the incoming orders section that
        allowed servers to either cancel or send items to the kitchen as well as
        the order history component. In addition, I redesigned a past orders
        section that allowed servers to view their complete order history along
        with session details including the bill, items ordered, and payment
        status. I primarily used javascript and firebase for data collection and
        manipulation in the back-end, and react as a framework for the
        front-end.
      </div>

      <br></br>
      <Row style={{ justifyContent: "center" }}>
        <Carousel>
          <Carousel.Item>
            <img src={Quicktab6} className="img-carousel" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Quicktab7} className="img-carousel" />
          </Carousel.Item>
        </Carousel>
      </Row>
      <br></br>

      <div className="subheading">QR Code Internal Tool </div>
      <div className="paragraph">
        Finally, I coded a feature for the Quicktab team to allow them to view
        all of the tables across restaurants and obtain QR Codes that would
        allow users to check in to these tables. I used Firebase and React JS to
        collect the data and then formatted the QR Codes and implemented a
        download function so that the QR Codes could be easily saved and printed
        to be distributed at their restaurants.
      </div>

      <Row>
        <a href="/tunely" className="prev">
          <Col>Previous Project</Col>
        </a>

        <a href="/splitpeas" className="next">
          <Col>Next Project</Col>
        </a>
      </Row>
    </div>
  );
}

export default Projects;
