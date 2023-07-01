import { Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import Button from "../../Button/Button";
import emailjs from "emailjs-com";
import "./heroSection.scss";
import { toast } from "react-toastify";
import * as yup from "yup";

let schema = yup.object().shape({
  email: yup.string().email().required(),
});

const yupSync = {
  async validator({ field }, value) {
    await schema.validateSyncAt(field, { [field]: value });
  },
};

const HeroSection = () => {
  const [form] = useForm();
  const handleOnSubmit = (values) => {
    emailjs
      .send("service_zng38u4", "template_794u15t", values, "vy_FxezavPe71pueb")
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
    <div className="container">
      <meta
        name="description"
        content="Crafter crews is a new and better way to communicate with all your film crew members. It’s faster, well organised and more convenient  than email or WhatsApp"
      />

      <meta property="og:title" content="Where collaboration happens" />

      <title> Crafter crews | Work communication app for film crews </title>
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
                <Form.Item name="email" rules={[yupSync]}>
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
