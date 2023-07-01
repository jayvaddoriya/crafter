import { Col, Row } from "antd";
import React from "react";
import "./FeatureItem.scss";

const FeatureItem = ({ feature }) => {
  return (
    <Row className="feature-container">
      <meta
        name="description"
        content="Crafter crews is a new and better way to communicate with all your film crew members. It’s faster, well organised and more convenient  than email or WhatsApp"
      />

      <meta property="og:title" content="Where collaboration happens" />

      <title> Crafter crews | Work communication app for film crews </title>
      <Col xxl={8} xl={9} lg={9} md={9} className="feature-text-container">
        <div className="feature-title">{feature.title}</div>
        {feature.description.map((text) => {
          return <div className="feature-text">{text}</div>;
        })}
      </Col>
      <Col xxl={14} xl={13} lg={13} md={13} className="feature-gif-container">
        <img src={feature.gif} alt="" className="feature-gif" />
      </Col>
    </Row>
  );
};

export default FeatureItem;
