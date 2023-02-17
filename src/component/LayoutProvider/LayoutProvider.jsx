import { Content } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NavHeader from "../NavHeader/NavHeader";
import "../../styles/globle.scss";

const LayoutProvider = () => {
  return (
    <>
      <meta
        name="description"
        content="Crafter crews is a new and better way to communicate with all your film crew members. It’s faster, well organised and more convenient  than email or WhatsApp"
      />

      <meta property="og:title" content="Where collaboration happens" />

      <title> Crafter crews | Work communication app for film crews </title>
      <NavHeader />
      <Navbar />
      <Content style={{ background: "#fff" }}>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
};

export default LayoutProvider;
