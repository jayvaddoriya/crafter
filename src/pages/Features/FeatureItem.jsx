import React from "react";
import "./FeatureItem.scss";

const FeatureItem = ({ feature }) => {
  return (
    <div className="feature-container">
      <div className="feature-text-container">
        <div className="feature-title">{feature.title}</div>
        {feature.description.map((text) => {
          return <div className="feature-text">{text}</div>;
        })}
      </div>
      <div className="feature-gif-container">
        <img src={feature.gif} alt="" className="feature-gif" />
      </div>
    </div>
  );
};

export default FeatureItem;
