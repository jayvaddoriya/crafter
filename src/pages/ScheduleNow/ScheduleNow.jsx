import { Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import Button from "../../component/Button/Button";
import "./scheduleNow.scss";

const ScheduleNow = () => {
  const [form] = useForm();
  const handleOnSubmit = (values) => {
    console.log(values);
    form.resetFields();
  };
  return (
    <div className="scheduleNow">
      <Row justify="center">
        <Col xxl={12} xl={12}>
          <div className="headings">
            <h2>Get in touch with</h2>
            <h1>our expert</h1>
            <p>Want to find out how Crafter can help your organisation?</p>
            <p>We’d love to hear from you</p>
          </div>
        </Col>
        <Col xxl={12} xl={12}>
          <div className="formDivMain">
            <h2>Let’s get to know you</h2>
            <p>*Required fields</p>
            <Form className="formdiv" form={form} onFinish={handleOnSubmit}>
              <Form.Item
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: false,
                  },
                ]}
              >
                <Input placeholder="First name*" />
              </Form.Item>
              <Form.Item
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: false,
                  },
                ]}
              >
                <Input placeholder="Last name*" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: false,
                  },
                ]}
              >
                <Input placeholder="Email address*" />
              </Form.Item>
              <Form.Item
                name="jobTitle"
                rules={[
                  {
                    required: true,
                    message: false,
                  },
                ]}
              >
                <Input placeholder="Job title*" />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: false,
                  },
                ]}
              >
                <Input placeholder="Phone number*" />
              </Form.Item>
              <Form.Item
                name="company"
                rules={[
                  {
                    required: true,
                    message: false,
                  },
                ]}
              >
                <Input placeholder="Company*" />
              </Form.Item>
              <Form.Item
                name="country"
                rules={[
                  {
                    required: true,
                    message: false,
                  },
                ]}
              >
                <Input placeholder="Country*" />
              </Form.Item>
              <h2>Tell us about your Studio</h2>
              <Form.Item
                name="movieStudioSize"
                rules={[
                  {
                    required: true,
                    message: false,
                  },
                ]}
              >
                <Input placeholder="Movie studio size*" />
              </Form.Item>
              <h2>How can we help you today?</h2>
              <Form.Item
                name="textAreaField"
                rules={[
                  {
                    required: true,
                    message: false,
                  },
                ]}
              >
                <TextArea
                  rows={8}
                  placeholder="Let us know how can we help you*"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="secondary"
                  title="Schedule now"
                  htmlType="submit"
                  responsiveBtn="responsiveBtn"
                />
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ScheduleNow;