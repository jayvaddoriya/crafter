import React from "react";
import "./coreTeam.scss";
import coreTeamMobileWeb from "../../../assets/gifs/Web mockup.gif";
import TeamMobileWeb from "../../../assets/gifs/mobile.gif";
import gif from "../../../assets/gifs/Mobile RD 2 3.gif";
import Button from "../../Button/Button";
import { Col, Row } from "antd";

const CoreTeam = () => {
  return (
    <>
      <div className="coreTeam">
        <div className="webAndMobileImg container">
          <div>
            <div className="divoo">
              <img
                className="teamMobileImg"
                src={TeamMobileWeb}
                alt="coreTeamMobileImg"
              />

              <img className="imageofimage" src={gif} alt="coreTeamMobileImg" />
            </div>
            <img
              className="coreTeamMobileImg"
              src={coreTeamMobileWeb}
              alt="coreTeamMobileImg"
            />
          </div>
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
