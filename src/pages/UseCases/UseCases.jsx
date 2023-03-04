import React from "react";
import { Helmet } from "react-helmet";
import { useCaseData } from "./useCaseData";
import UseCaseItem from "./UseCaseItem";
import "./UseCases.scss";

const UseCases = () => {
  return (
    <div className="usecases-container  ">
      <Helmet>
        {" "}
        <title>
          Crafter Crews | Real-World Use Cases for Our WhatsApp Alternative |
          Film Crews
        </title>
      </Helmet>
      <meta
        name="description"
        content="Discover how our WhatsApp alternative has helped Film Crews streamline communication and collaboration in real-world use cases. From pre-production to post-production, explore our use cases and see the benefits for yourself."
      />
      <meta property="og:title" content="Where collaboration happens" />
      {useCaseData.map((useCase) => {
        return <UseCaseItem useCase={useCase} />;
      })}
    </div>
  );
};

export default UseCases;
