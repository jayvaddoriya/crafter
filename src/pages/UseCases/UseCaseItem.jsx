import { Col, Row } from "antd";
import React from "react";
import "./UseCaseItem.scss";

const UseCaseItem = ({ useCase }) => {
  return (
    <Row className="usecase-container container" justify="space-between">
      <Col xxl={9} xl={11} lg={11} md={11} className="usecase-text-container ">
        <div className="usecase-title">{useCase.title}</div>
        {useCase.description && (
          <div className="usecase-text">{useCase.description}</div>
        )}
        {useCase.topics.map((topic) => {
          return (
            <div className="usecase-topic-container">
              <div className="usecase-topic-title">{topic.title}</div>
              <div>{topic.description}</div>
            </div>
          );
        })}
      </Col>
      <Col xxl={11} xl={11} lg={11} md={11} className="usecase-gif-container">
        <img src={useCase.gif} alt="" className="usecase-gif" />
      </Col>
    </Row>
  );
};

export default UseCaseItem;
