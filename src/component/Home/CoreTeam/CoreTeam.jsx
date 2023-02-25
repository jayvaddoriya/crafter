import React from "react";
import "./coreTeam.scss";
import coreTeamMobileWeb from "../../../assets/gifs/Web mockup.gif";
import TeamMobileWeb from "../../../assets/gifs/Mobile Mockup.gif";
import Button from "../../Button/Button";
import { Col, Row } from "antd";

const CoreTeam = () => {
  return (
    <>
      <meta
        name="description"
        content="Crafter crews is a new and better way to communicate with all your film crew members. It’s faster, well organised and more convenient  than email or WhatsApp"
      />

      <meta property="og:title" content="Where collaboration happens" />

      <title> Crafter crews | Work communication app for film crews </title>
      <div className="coreTeam">
        <div className="webAndMobileImg container">
          <div className="divoo">
            <img
              className="teamMobileImg"
              src={TeamMobileWeb}
              alt="coreTeamMobileImg"
            />
          </div>
          <img
            className="coreTeamMobileImg"
            src={coreTeamMobileWeb}
            alt="coreTeamMobileImg"
          />
        </div>
        <div className="container">
          <Row>
            <Col xxl={24}>
              <h1>Want to see what Crews can do for you?</h1>
              <div className="btnDiv">
                <Button title="Request a demo" type="primaryBig" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default CoreTeam;
