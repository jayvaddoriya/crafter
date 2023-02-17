import React from "react";
import CoreTeam from "../../component/Home/CoreTeam/CoreTeam";
import HeroSection from "../../component/Home/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <meta
        name="description"
        content="Crafter crews is a new and better way to communicate with all your film crew members. It’s faster, well organised and more convenient  than email or WhatsApp"
      />
      <meta property="og:title" content="Where collaboration happens" />
      <HeroSection />
      <CoreTeam />
    </div>
  );
};

export default Home;
