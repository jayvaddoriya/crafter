import React from "react";
import "./Demo.scss";
import iamgeOfDemo from "../../assets/png/demo.png";
import youTubeLogo from "../../assets/svg/youTubeLogo.svg";

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
          <img className="youTubeLogo" src={youTubeLogo} alt="youTubeLogo" />
        </div>
      </div>
    </>
  );
};
export default Demo;
