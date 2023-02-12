import { Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import Button from "../../Button/Button";
import "./heroSection.scss";

const HeroSection = () => {
  const [form] = useForm();
  const handleOnSubmit = (values) => {
    console.log(values);
    form.resetFields();
  };
  return (
    <div className="container">
      <div className="herosection">
        <h2>Welcome to</h2>
        <h1>Crafter Crews</h1>
        <p>
          The all-in-one business communication platform that securely combines
          chat, groups and your movie production tools that you already use.
          Think Slack, but for film crews. With all your film crew members,
          production tools and communication in one place, you can work faster
          and more flexibly than ever before.
        </p>
        <div className="inputAndBtn">
          <Row justify="center">
            <Col xxl={24}>
              <Form className="formdiv" form={form} onFinish={handleOnSubmit}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input placeholder="Business email address*" />
                </Form.Item>
                <Form.Item>
                  <Button
                    title="Try Crafter"
                    htmlType="submit"
                    type="secondary"
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
