import React from "react";
import { useCaseData } from "./useCaseData";
import UseCaseItem from "./UseCaseItem";
import "./UseCases.scss";

const UseCases = () => {
  return (
    <div className="usecases-container  ">
      {useCaseData.map((useCase) => {
        return <UseCaseItem useCase={useCase} />;
      })}
    </div>
  );
};

export default UseCases;
