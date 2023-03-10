import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { useNavigate } from "react-router-dom";
import { blogData } from "./blogData";
import "./Blog.scss";
import { Helmet } from "react-helmet";

const Blog = () => {
  const navigate = useNavigate();
  const handleOnClick = (item, index) => {
    navigate("/blogPage", { state: { blogItem: item, index: index } });
  };
  return (
    <div className="container">
      <Helmet>
        <title>
          Crafter Crews | Insights and Tips for Collaborating on Movie Projects
          | WhatsApp Alternative Blog
        </title>
      </Helmet>
      <meta
        name="description"
        content="Stay up to date with our WhatsApp alternative blog, where we share insights, tips, and best practices for streamlining communication and collaboration on movie projects. Subscribe today!"
      />
      <meta property="og:title" content="Where collaboration happens" />
      <Row justify="space-between" className="mainRowBlog" gutter={[28, 28]}>
        {blogData.map((item, index) => {
          return (
            <Col xxl={8} xl={8} lg={8} md={8} xs={12} key={index}>
              <Card
                cover={<img alt="blog1" src={item.image} />}
                onClick={() => {
                  handleOnClick(item, index);
                }}
              >
                <Meta title={item.title} description={item.describtion} />
                <div className="rightArrowDiv">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.1282 15.7952C29.1282 8.43525 23.1549 2.46191 15.7949 2.46191C8.43488 2.46191 2.46155 8.43525 2.46155 15.7952C2.46155 23.1552 8.43488 29.1286 15.7949 29.1286C23.1549 29.1286 29.1282 23.1552 29.1282 15.7952ZM15.7949 19.5152V17.1286H11.7949C11.0615 17.1286 10.4615 16.5286 10.4615 15.7952C10.4615 15.0619 11.0615 14.4619 11.7949 14.4619H15.7949V12.0752C15.7949 11.4752 16.5149 11.1819 16.9282 11.6086L20.6482 15.3286C20.9149 15.5952 20.9149 16.0086 20.6482 16.2752L16.9282 19.9952C16.8342 20.0874 16.7151 20.1496 16.5857 20.1742C16.4564 20.1987 16.3227 20.1844 16.2015 20.133C16.0803 20.0817 15.977 19.9957 15.9047 19.8857C15.8323 19.7758 15.7941 19.6469 15.7949 19.5152Z"
                      fill="#008C72"
                    />
                  </svg>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Blog;
