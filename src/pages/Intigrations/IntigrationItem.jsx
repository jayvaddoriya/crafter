import { Col, Row } from "antd";
import React from "react";
import "./IntigrationItem.scss";

const IntigrationItem = ({ useCase }) => {
  return (
    <Row className="usecase-container container" justify="space-between">
      <meta
        name="description"
        content="Crafter crews is a new and better way to communicate with all your film crew members. It’s faster, well organised and more convenient  than email or WhatsApp"
      />
      <meta property="og:title" content="Where collaboration happens" />
      <Col xxl={9} xl={11} lg={11} md={11} className="usecase-text-container ">
        <div className="title-main">
          <img src={useCase.icon} alt="docSign" className="docSign" />
          <div className="usecase-title">{useCase.title}</div>
        </div>
        {useCase?.description &&
          useCase?.description?.map((item) => (
            <div className="usecase-text">{item}</div>
          ))}
      </Col>
      <Col xxl={11} xl={11} lg={11} md={11} className="usecase-gif-container">
        <img src={useCase.gif} alt="" className="usecase-gif" />
      </Col>
    </Row>
  );
};

export default IntigrationItem;
