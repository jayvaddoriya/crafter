import React from "react";
import { intigrationData } from "./intigrationData";
import IntigrationItem from "./IntigrationItem";
import "./Intigration.scss";

const Intingration = () => {
  return (
    <div className="usecases-container  ">
      <meta
        name="description"
        content="Crafter crews is a new and better way to communicate with all your film crew members. It’s faster, well organised and more convenient  than email or WhatsApp"
      />
      <meta property="og:title" content="Where collaboration happens" />
      {intigrationData?.map((useCase) => {
        return <IntigrationItem useCase={useCase} />;
      })}
    </div>
  );
};

export default Intingration;
