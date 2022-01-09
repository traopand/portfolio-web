import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Rectangle from "../images/rectangle.png";
import Habbit from "../images/habbit.png";
import ReactPlayer from "react-player";
import "../styles/Habbit.css";

function Projects() {
  return (
    <div className="div-projects">
      <Row>
        <div className="projectheader">Habbit:</div>
        <div className="slogan">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Explore the realm of financial planning!")
                .callFunction(() => {})
                .start();
            }}
          />
        </div>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Image src={Habbit} className="img-top"></Image>
      </Row>
      <br></br>
      <div className="paragraph">
        <b className="summary-habbit">💼 Role(s):</b> Software Developer, UI/UX
        Designer
        <br></br>
        <b className="summary-habbit">🛠️ Languages and Tools:</b> React Native,
        Javascript, Figma
        <br></br>
        <b className="summary-habbit">🗓️ Timeline:</b> January 8-10 2021
        <br></br>
        <b className="summary-quicktab">👥 Team:</b> Abby DiLaudo, Ameena Naqvi,
        Irene Ni, Tara Rao-Pandit
        <br></br>
        <br></br>
        <a
          href="https://github.com/traopand/habbit-finance-app"
          target="_blank"
          className="git-habbit"
        >
          <b className="summary-habbit">🔗 Github Repo</b>
        </a>
      </div>
      <br></br>
      <div className="paragraph">
        Habbit is a mobile application that I developed with 3 other university
        students as a part of She Hacks 2021. We had 36 hours to come up with
        our idea, design the prototype on figma and implement the code which we
        did using React Native.
      </div>

      <div className="subheading">Inspiration</div>
      <div className="paragraph">
        Originally inspired by the Hobbit, this app was meant to bridge the
        financial literacy gap that exists for young girls through a mystical
        and adventurous platform that is both educational and fully interactive.
        We hope to inspire our users to build the lifelong habit of financial
        planning!
      </div>
      <div>
        <br></br>
      </div>
      <div className="paragraph">
        As a group of women who received no formal education on personal
        finance, we were also inspired by our own experience and hoped to
        develop an app that bridged this disconnect for female youth, making
        financial literacy accessible and commonplace.
      </div>
      <div className="subheading">What it does</div>
      <div className="paragraph">
        Habbit acts as both an educational app and a personalized income tracker
        that teaches young girls about saving and spending. Users stay involved
        through tracking their daily expenses and earnings while also learning
        about money basics, budgeting and trivia. Using their newfound financial
        awareness, young girls are empowered to thoughtfully exercise their
        financial independence and make wiser and better-informed spending
        choices.
      </div>
      <div className="subheading">How we built it</div>
      <div className="paragraph">
        Our team used Figma for front end development, creating a detailed
        prototype of our app that showcased its UI and UX elements. We then
        built the app in Visual Studio, translating our original Figma design to
        code and successfully achieving working functionality.
      </div>
      <div className="paragraph">
        All of the graphics for the app were hand-drawn in Photoshop, including
        the logo, icons, dragon avatar and background assets. Our team drew
        inspiration from the illustrations in The Hobbit novel, a childhood
        favourite, to create an engaging and child-friendly design.
      </div>
      <div className="subheading">Challenges we ran into</div>
      <div className="paragraph">
        No members of the group had experience with Visual Studio or React
        Native, and so we were challenged to code with a language and platform
        that we were completely unfamiliar with! This encouraged our team to
        step beyond our comfort zone and learn and adapt to the new software in
        a time-efficient manner. Whether it be through Youtube videos or digital
        manuals, we were challenged to take initiative and independently educate
        ourselves on the operation of this high-level platform.
      </div>
      <div>
        <br></br>
      </div>
      <div className="paragraph">
        In terms of our design, we had trouble transferring our outline on Figma
        into Visual Studio as our limited knowledge of the software prevented us
        from implementing complex graphics within the app. This caused us to
        adopt a pragmatic mindset, realistically adjusting our plan based on our
        digital capabilities while also not losing track of the app’s main
        focus.
      </div>
      <div className="subheading">Accomplishments that we're proud of</div>
      <div className="paragraph">
        Two of our proudest accomplishments include; our hand-drawn avatar and
        icons as well as our successful use of Visual Studio despite not knowing
        React Native!
      </div>
      <div className="subheading">What we learned</div>
      <div className="paragraph">
        Creating Habbit was a challenging yet highly enriching and rewarding
        experience that forced us to stretch our limits and experiment with new
        apps like Figma and VisualStudio within a time-sensitive project-based
        environment. Through this process we learned how to translate desired
        features of our app into code, rapidly increasing our understanding of
        Visual Studio and React Native. Furthermore, in terms of design, this
        was also our first-time using Figma. Once again, we learned how to work
        on a new platform through creating animations and graphics for our final
        product.
      </div>
      <div className="subheading">What's next for Habbit</div>
      <div className="paragraph">
        <li>
          Implement the option to have a parental supervisor on the youth’s
          account. Create a parental view of the app. Add features such as a
          parent PIN to confirm the user’s tasks/chores are actually completed.
        </li>
        <li>
          Add short-term and long-term item goals which the user can set aside
          savings for along with a progress tracker for these goals.
        </li>
        <li>
          Create a points system for completing educational lessons and reaching
          financial goals
        </li>
        <li>
          Avatar upgrades that correspond to points level (Hatchling,
          Dragonette, Dracarys, Smaug)
        </li>
        <li>
          Track spending categories in order to help users effectively target
          areas where they can make better financial choices.
        </li>
        <li>
          Program the tasks so that the user can choose to personalize the
          amount of money they receive from each chore.
        </li>
      </div>

      <div className="subheading">Product Demo</div>
      <Row style={{ justifyContent: "center" }}>
        <ReactPlayer url="https://youtu.be/mNapPytyNfs" />
      </Row>

      <Row>
        <a href="/rally" className="prev">
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
