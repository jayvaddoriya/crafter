import React from "react";
import "./Demo.scss";
import iamgeOfDemo from "../../assets/png/demo.png";
import mobile from "../../assets/png/mobile.png";
import youTubeLogo from "../../assets/svg/youTubeLogo.svg";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <>
      <div className="container">
        <div className="demo">
          <h3>Crafter Crew Product Demo</h3>
          <p>
            A flexible platform to work more efficiently and effectively with
            your film crew members.
          </p>
        </div>
      </div>
      <div className="demoImage">
        <div className="container imageDemo">
          <img className="iamgeOfDemo" src={iamgeOfDemo} alt="iamgeOfDemo" />
          <Link to="https://youtu.be/6bXNMmk5dXI" target="_blank">
            <img className="youTubeLogo" src={youTubeLogo} alt="youTubeLogo" />
          </Link>
        </div>
      </div>
      <div className="demoImagemobile">
        <div className="container imageDemo">
          <img
            className="iamgeOfMobileDemo"
            src={mobile}
            alt="iamgeOfMobileDemo"
          />
          <Link to="https://youtu.be/PEqMQEgUI8c" target="_blank">
            <img className="youTubeLogo" src={youTubeLogo} alt="youTubeLogo" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Demo;
