import React from "react";
import "./UseCaseItem.scss";

const UseCaseItem = ({ useCase }) => {
  return (
    <div className="usecase-container">
      <div className="usecase-text-container">
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
      </div>
      <div className="usecase-gif-container">
        <img src={useCase.gif} alt="" className="usecase-gif" />
      </div>
    </div>
  );
};

export default UseCaseItem;
