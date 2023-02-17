import { Col, Row } from "antd";
import React from "react";
import MediumLogo from "../../assets/svg/components/MediumLogo";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <meta
        name="description"
        content="Crafter crews is a new and better way to communicate with all your film crew members. It’s faster, well organised and more convenient  than email or WhatsApp"
      />

      <meta property="og:title" content="Where collaboration happens" />

      <title> Crafter crews | Work communication app for film crews </title>
      <div className="container">
        <Row>
          <Col xxl={5} xl={5} lg={5} md={5} xs={24} className="footer-menu">
            <input type="checkbox" id="company" className="dd-input" />
            <label htmlFor="company">
              <h5>Company</h5>
            </label>
            <p>News & Media</p>
            <p>Careers</p>
            <p>FAQ</p>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} xs={24} className="footer-menu">
            <input type="checkbox" id="help" className="dd-input" />
            <label htmlFor="help">
              <h5>Help & Resources</h5>
            </label>
            <p>Help Centre</p>
            <p>Contact support</p>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} xs={24} className="footer-menu">
            <input type="checkbox" id="legal" className="dd-input" />
            <label htmlFor="legal">
              <h5>Legal Information</h5>
            </label>
            <p>Privacy Policy</p>
            <p>Acceptable Use Policy</p>
            <p>Terms of Service</p>
          </Col>
        </Row>
        <div className="lastFooter">
          <div className="footerIcons">
            <svg
              width="56"
              height="56"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.5 0.09375C11.9166 0.09375 0.09375 11.9166 0.09375 26.5C0.09375 41.0834 11.9166 52.9062 26.5 52.9062C41.0834 52.9062 52.9062 41.0834 52.9062 26.5C52.9062 11.9166 41.0834 0.09375 26.5 0.09375ZM39.629 20.6358C39.6412 20.911 39.6463 21.1873 39.6463 21.4645C39.6463 29.9348 33.3605 39.7031 21.8627 39.7031C18.3323 39.7031 15.0468 38.6418 12.2802 36.8238C12.7698 36.8838 13.2684 36.9142 13.7722 36.9142C16.7013 36.9142 19.3967 35.8895 21.5356 34.17C18.8005 34.1182 16.492 32.2637 15.6968 29.7175C16.0777 29.7906 16.4697 29.8312 16.8719 29.8312C17.4427 29.8312 17.9962 29.753 18.5192 29.6068C15.6592 29.0187 13.5051 26.4279 13.5051 23.3221C13.5051 23.2947 13.5051 23.2693 13.5051 23.2419C14.348 23.7212 15.3119 24.0097 16.3366 24.0432C14.6598 22.8945 13.5569 20.9323 13.5569 18.7091C13.5569 17.533 13.8646 16.4321 14.4019 15.4845C17.4863 19.3632 22.0912 21.9165 27.2861 22.1826C27.1805 21.7154 27.1246 21.2248 27.1246 20.7221C27.1246 17.1827 29.9227 14.3125 33.3748 14.3125C35.1724 14.3125 36.7964 15.0915 37.937 16.3377C39.3619 16.0492 40.7005 15.516 41.907 14.7817C41.4409 16.2787 40.4506 17.5351 39.1588 18.3283C40.4242 18.1719 41.6288 17.8286 42.75 17.3177C41.9121 18.6025 40.8518 19.7309 39.629 20.6358Z"
                fill="#8C0019"
              />
            </svg>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.9999 0.399902C12.7815 0.399902 0.399902 12.7803 0.399902 27.9999C0.399902 43.2195 12.7815 55.5999 27.9999 55.5999C43.2183 55.5999 55.5999 43.2195 55.5999 27.9999C55.5999 12.7803 43.2183 0.399902 27.9999 0.399902ZM19.5999 39.9999H14.7999V21.9999H19.5999V39.9999ZM17.1999 18.3999C15.8739 18.3999 14.7999 17.3259 14.7999 15.9999C14.7999 14.6739 15.8739 13.5999 17.1999 13.5999C18.5259 13.5999 19.5999 14.6739 19.5999 15.9999C19.5999 17.3259 18.5259 18.3999 17.1999 18.3999ZM42.3999 39.9999H37.5999V33.9999V30.9999C37.5999 28.6899 35.7099 26.7999 33.3999 26.7999C31.0899 26.7999 29.1999 28.6899 29.1999 30.9999V39.9999H24.3999V21.9999H29.1999V24.1791C30.6015 22.8327 32.5023 21.9999 34.5999 21.9999C38.9079 21.9999 42.3999 25.4919 42.3999 29.7999V39.9999Z"
                fill="#8C0019"
              />
            </svg>
            <MediumLogo fill="#8C0019" />
          </div>
          <div className="companyTag">
            <p>Crafter © 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
