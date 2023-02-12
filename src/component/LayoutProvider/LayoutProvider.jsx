import { Col, Layout, Row } from "antd";
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
