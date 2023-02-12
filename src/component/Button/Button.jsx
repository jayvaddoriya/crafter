import React from "react";
import { Button as AntdButton } from "antd";
import "./button.scss";

const Button = ({
  type,
  title,
  htmlType,
  onClick,
  responsiveBtn,
  bgChangeresponsiveBtn,
}) => {
  switch (type) {
    case "secondary":
      return (
        <AntdButton
          onClick={onClick}
          htmlType={htmlType}
          className={`button secondaryBtn ${responsiveBtn} ${bgChangeresponsiveBtn}`}
        >
          {title}
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.3333 22.0003C40.3333 11.8803 32.12 3.66699 22 3.66699C11.88 3.66699 3.66663 11.8803 3.66663 22.0003C3.66663 32.1203 11.88 40.3337 22 40.3337C32.12 40.3337 40.3333 32.1203 40.3333 22.0003ZM22 27.1153V23.8337H16.5C15.4916 23.8337 14.6666 23.0087 14.6666 22.0003C14.6666 20.992 15.4916 20.167 16.5 20.167H22V16.8853C22 16.0603 22.99 15.657 23.5583 16.2437L28.6733 21.3587C29.04 21.7253 29.04 22.2937 28.6733 22.6603L23.5583 27.7753C23.4291 27.902 23.2652 27.9876 23.0874 28.0213C22.9096 28.055 22.7258 28.0354 22.5591 27.9648C22.3925 27.8942 22.2504 27.7759 22.1509 27.6247C22.0514 27.4735 21.9989 27.2963 22 27.1153Z"
              fill="white"
            />
          </svg>
        </AntdButton>
      );
    case "primaryBig":
      return (
        <AntdButton
          htmlType={htmlType}
          className="button primaryBigBtn"
          onClick={onClick}
        >
          {title}
          <svg
            width="48"
            height="48"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.1282 15.7952C29.1282 8.43525 23.1549 2.46191 15.7949 2.46191C8.43488 2.46191 2.46155 8.43525 2.46155 15.7952C2.46155 23.1552 8.43488 29.1286 15.7949 29.1286C23.1549 29.1286 29.1282 23.1552 29.1282 15.7952ZM15.7949 19.5152V17.1286H11.7949C11.0615 17.1286 10.4615 16.5286 10.4615 15.7952C10.4615 15.0619 11.0615 14.4619 11.7949 14.4619H15.7949V12.0752C15.7949 11.4752 16.5149 11.1819 16.9282 11.6086L20.6482 15.3286C20.9149 15.5952 20.9149 16.0086 20.6482 16.2752L16.9282 19.9952C16.8342 20.0874 16.7151 20.1496 16.5857 20.1742C16.4564 20.1987 16.3227 20.1844 16.2015 20.133C16.0803 20.0817 15.977 19.9957 15.9047 19.8857C15.8323 19.7758 15.7941 19.6469 15.7949 19.5152Z"
              fill="#05493D"
            />
          </svg>
        </AntdButton>
      );
    default:
      return (
        <AntdButton
          htmlType={htmlType}
          className="button primaryBtn"
          onClick={onClick}
        >
          {title}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.1282 15.7952C29.1282 8.43525 23.1549 2.46191 15.7949 2.46191C8.43488 2.46191 2.46155 8.43525 2.46155 15.7952C2.46155 23.1552 8.43488 29.1286 15.7949 29.1286C23.1549 29.1286 29.1282 23.1552 29.1282 15.7952ZM15.7949 19.5152V17.1286H11.7949C11.0615 17.1286 10.4615 16.5286 10.4615 15.7952C10.4615 15.0619 11.0615 14.4619 11.7949 14.4619H15.7949V12.0752C15.7949 11.4752 16.5149 11.1819 16.9282 11.6086L20.6482 15.3286C20.9149 15.5952 20.9149 16.0086 20.6482 16.2752L16.9282 19.9952C16.8342 20.0874 16.7151 20.1496 16.5857 20.1742C16.4564 20.1987 16.3227 20.1844 16.2015 20.133C16.0803 20.0817 15.977 19.9957 15.9047 19.8857C15.8323 19.7758 15.7941 19.6469 15.7949 19.5152Z"
              fill="#05493D"
            />
          </svg>
        </AntdButton>
      );
  }
};

export default Button;
