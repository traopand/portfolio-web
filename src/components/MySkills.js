import React from "react";
import { Row, Image, Container, Col } from "react-bootstrap";
import skills from "../images/skills.png";
import "../styles/Skills.css";
import Waterloo from "../images/waterloo.png";
import IB from "../images/ib.png";

function MySkills() {
  return (
    <div className="div-skills">
      <Row>
        <Col>
          <Row style={{ justifyContent: "center" }}>
            <Image src={skills} className="img-skills"></Image>
          </Row>
        </Col>
        <Col className="col-ed">
          <Row className="ed-title">Education</Row>
          <Row className="ed-group">
            <Image src={Waterloo} className="ed-icon" />

            <div style={{ direction: "vertical" }} className="school-group">
              <div className="school">
                {" "}
                Systems Design Engineering, University of Waterloo
              </div>
              <div className="activities">
                Cumulative Academic Average {">"} 90%
              </div>
              <div className="activities">
                {" "}
                <u>Activities and Societies:</u> Engineering Society Advertising
                Graphics Director, Engineering Society Mental Wellness Graphic
                Designer, Engineers Without Borders (Advocacy Team)
              </div>
            </div>
          </Row>

          <Row>
            <Image src={IB} className="ed-icon" />

            <div style={{ direction: "vertical" }} className="school-group">
              <div className="school">
                {" "}
                International Baccalaureate Programme (43/45), White Oaks
                Secondary School
              </div>
              <div className="activities">
                {" "}
                <u>Activities and Societies:</u> President of WE Activists,
                Orientation Leader, Competitive Dance, Piano, Senior Tennis Team
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default MySkills;
