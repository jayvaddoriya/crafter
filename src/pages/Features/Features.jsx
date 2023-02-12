import React from "react";
import { featureData } from "./featureData";
import FeatureItem from "./FeatureItem";
import "./Features.scss";

const Features = () => {
  return (
    <div className="features-container container">
      {featureData.map((feature) => {
        return <FeatureItem feature={feature} />;
      })}
      <div className="features-description">
        <p>
          Threaded messages are essentially that. You can use threaded messages
          in Crews’s channels, direct messages, and Apps. In each of these
          instances, there are ways to utilise threaded messages effectively to
          benefit you and your team.
        </p>
        <p>
          For example, an assistant director wants a weekly update on casting;
          they can ask in either the #casting channel to their team or directly
          message someone. In both instances, there is an option to add a
          threaded message as a reply.
        </p>
      </div>
    </div>
  );
};

export default Features;
