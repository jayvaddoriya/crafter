import React from "react";
import { Helmet } from "react-helmet";
import CoreTeam from "../../component/Home/CoreTeam/CoreTeam";
import HeroSection from "../../component/Home/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
          Crafter Crews | Boost Collaboration on Movie Projects with Our
          WhatsApp Alternative
        </title>
      </Helmet>
      <meta
        name="description"
        content="Say goodbye to scattered communication and lost files on your movie projects. Our WhatsApp alternative provides a centralized hub for messaging, file sharing, and task management. Sign up for a free trial today!"
      />
      <meta property="og:title" content="Where collaboration happens" />
      <HeroSection />
      <CoreTeam />
    </div>
  );
};

export default Home;
