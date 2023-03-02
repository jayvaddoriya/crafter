import { Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import Button from "../../component/Button/Button";
import emailjs from "emailjs-com";
import "./scheduleNow.scss";
import { toast } from "react-toastify";
import * as yup from "yup";

let schema = yup.object().shape({
  firstname: yup.string().required("Please enter your first name"),
  lastname: yup.string().required("Please enter your last name"),
  email: yup.string().email().required("Please enter your email"),
  jobTitle: yup.string().required("Please enter your job title"),
  company: yup.string().required("Please enter your company"),
  country: yup.string().required("Please enter your country"),
  textAreaField: yup.string().required("Please enter text area"),
  phoneNumber: yup
    .number()
    .required("Please enter phone number")
    .typeError("Number only.")
    .positive()
    .integer()
    .round(),
  movieStudioSize: yup
    .number()
    .required("Please enter movie studio size")
    .typeError("Number only.")
    .positive()
    .integer()
    .round(),
});

const yupSync = {
  async validator({ field }, value) {
    await schema.validateSyncAt(field, { [field]: value });
  },
};

const ScheduleNow = () => {
  const [form] = useForm();
  const handleOnSubmit = (values) => {
    emailjs
      .send("service_wp6wf1p", "template_794u15t", values, "vy_FxezavPe71pueb")
      .then(
        (result) => {
          console.log(result.text);
          form.resetFields();
          toast.success("Email send");
        },
        (error) => {
          console.log(error.text);
          toast.error("Somthing went wrong");
        }
      );
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
              <Form.Item name="firstname" rules={[yupSync]}>
                <Input placeholder="First name*" />
              </Form.Item>
              <Form.Item name="lastname" rules={[yupSync]}>
                <Input placeholder="Last name*" />
              </Form.Item>
              <Form.Item name="email" rules={[yupSync]}>
                <Input placeholder="Email address*" />
              </Form.Item>
              <Form.Item name="jobTitle" rules={[yupSync]}>
                <Input placeholder="Job title*" />
              </Form.Item>
              <Form.Item name="phoneNumber" rules={[yupSync]}>
                <Input placeholder="Phone number*" />
              </Form.Item>
              <Form.Item name="company" rules={[yupSync]}>
                <Input placeholder="Company*" />
              </Form.Item>
              <Form.Item name="country" rules={[yupSync]}>
                <Input placeholder="Country*" />
              </Form.Item>
              <h2>Tell us about your Studio</h2>
              <Form.Item name="movieStudioSize" rules={[yupSync]}>
                <Input placeholder="Movie studio size*" />
              </Form.Item>
              <h2>How can we help you today?</h2>
              <Form.Item name="textAreaField" rules={[yupSync]}>
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
