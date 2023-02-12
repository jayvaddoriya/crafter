import { Col, Row } from "antd";
import React from "react";
import "./FeatureItem.scss";

const FeatureItem = ({ feature }) => {
  return (
    <Row className="feature-container">
      <Col xxl={11} xl={11} lg={11} md={11} className="feature-text-container">
        <div className="feature-title">{feature.title}</div>
        {feature.description.map((text) => {
          return <div className="feature-text">{text}</div>;
        })}
      </Col>
      <Col xxl={12} xl={12} lg={12} md={12} className="feature-gif-container">
        <img src={feature.gif} alt="" className="feature-gif" />
      </Col>
    </Row>
  );
};

export default FeatureItem;
