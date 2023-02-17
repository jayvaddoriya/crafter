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
    <div className="scheduleNow container">
      <meta
        name="description"
        content="Crafter crews is a new and better way to communicate with all your film crew members. It’s faster, well organised and more convenient  than email or WhatsApp"
      />
      <meta property="og:title" content="Where collaboration happens" />
      <Row justify="space-between">
        <Col xxl={10} xl={12} lg={8} md={24} sm={24}>
          <div className="headings">
            <h2>Get in touch with</h2>
            <h1>our expert</h1>
            <p>Want to find out how Crafter can help your organisation?</p>
            <p>We’d love to hear from you</p>
          </div>
        </Col>
        <Col xxl={13} xl={12} lg={14} md={24}>
          <div className="formDivMain">
            <h2>Let’s get to know you</h2>
            <p>*Required fields</p>
            <Form className="formdiv" form={form} onFinish={handleOnSubmit}>
              <Form.Item
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "Please enter your first name",
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
                    message: "Please enter your last name",
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
                    message: "Please enter your email",
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
                    message: "Please enter your job title",
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
                    message: "Please enter your phone number",
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
                    message: "Please enter your company",
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
                    message: "Please select the country",
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
                    message: "Please enter movie studio size",
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
                    message: "Please enter about your self",
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
