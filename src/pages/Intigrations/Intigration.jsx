import React from "react";
import { intigrationData } from "./intigrationData";
import IntigrationItem from "./IntigrationItem";
import "./Intigration.scss";
import { Helmet } from "react-helmet";

const Intingration = () => {
  return (
    <div className="usecases-container  ">
      <Helmet>
        <title>
          Crafter Crews | Seamless Integrations for Your Movie Projects |
          WhatsApp Alternative
        </title>
      </Helmet>
      <meta
        name="description"
        content="Our WhatsApp alternative seamlessly integrates with popular movie tools to streamline communication and collaboration. Explore our integrations with project management, video editing, and other tools today."
      />
      <meta property="og:title" content="Where collaboration happens" />
      {intigrationData?.map((useCase) => {
        return <IntigrationItem useCase={useCase} />;
      })}
    </div>
  );
};

export default Intingration;
