import React from "react";
import { useCaseData } from "./useCaseData";
import UseCaseItem from "./UseCaseItem";
import "./UseCases.scss";

const UseCases = () => {
  return (
    <div className="usecases-container  ">
      <meta
        name="description"
        content="Crafter crews is a new and better way to communicate with all your film crew members. It’s faster, well organised and more convenient  than email or WhatsApp"
      />
      <meta property="og:title" content="Where collaboration happens" />
      {useCaseData.map((useCase) => {
        return <UseCaseItem useCase={useCase} />;
      })}
    </div>
  );
};

export default UseCases;
