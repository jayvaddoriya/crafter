import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import "./navbar.scss";
import crafter from "../../assets/svg/Crafter.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { Drawer } from "antd";

const linksItem = [
  {
    linkName: "Demo",
    to: "/",
  },
  {
    linkName: "Features",
    to: "/features",
  },
  {
    linkName: "Integrations",
    to: "/integrations",
  },
  {
    linkName: "Pricing",
    to: "/pricing",
  },
  {
    linkName: "Blog",
    to: "/blog",
  },
  {
    linkName: "Use cases",
    to: "/useCases",
  },
];

// const content = (
//   <div className="mainCard">
//     <div className="card">
//       <h4>FEATURES AT A GLANCE</h4>
//       <p>
//         Discover a simpler way to stay connected with familiar features you’ll
//         love to use.
//       </p>
//       <div>
//         <svg
//           width="48"
//           height="48"
//           viewBox="0 0 32 32"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M29.1282 15.7952C29.1282 8.43525 23.1549 2.46191 15.7949 2.46191C8.43488 2.46191 2.46155 8.43525 2.46155 15.7952C2.46155 23.1552 8.43488 29.1286 15.7949 29.1286C23.1549 29.1286 29.1282 23.1552 29.1282 15.7952ZM15.7949 19.5152V17.1286H11.7949C11.0615 17.1286 10.4615 16.5286 10.4615 15.7952C10.4615 15.0619 11.0615 14.4619 11.7949 14.4619H15.7949V12.0752C15.7949 11.4752 16.5149 11.1819 16.9282 11.6086L20.6482 15.3286C20.9149 15.5952 20.9149 16.0086 20.6482 16.2752L16.9282 19.9952C16.8342 20.0874 16.7151 20.1496 16.5857 20.1742C16.4564 20.1987 16.3227 20.1844 16.2015 20.133C16.0803 20.0817 15.977 19.9957 15.9047 19.8857C15.8323 19.7758 15.7941 19.6469 15.7949 19.5152Z"
//             fill="#05493D"
//           />
//         </svg>
//       </div>
//     </div>
//     <div className="card">
//       <h4>FEATURES AT A GLANCE</h4>
//       <p>
//         Discover a simpler way to stay connected with familiar features you’ll
//         love to use.
//       </p>
//       <div>
//         <svg
//           width="48"
//           height="48"
//           viewBox="0 0 32 32"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M29.1282 15.7952C29.1282 8.43525 23.1549 2.46191 15.7949 2.46191C8.43488 2.46191 2.46155 8.43525 2.46155 15.7952C2.46155 23.1552 8.43488 29.1286 15.7949 29.1286C23.1549 29.1286 29.1282 23.1552 29.1282 15.7952ZM15.7949 19.5152V17.1286H11.7949C11.0615 17.1286 10.4615 16.5286 10.4615 15.7952C10.4615 15.0619 11.0615 14.4619 11.7949 14.4619H15.7949V12.0752C15.7949 11.4752 16.5149 11.1819 16.9282 11.6086L20.6482 15.3286C20.9149 15.5952 20.9149 16.0086 20.6482 16.2752L16.9282 19.9952C16.8342 20.0874 16.7151 20.1496 16.5857 20.1742C16.4564 20.1987 16.3227 20.1844 16.2015 20.133C16.0803 20.0817 15.977 19.9957 15.9047 19.8857C15.8323 19.7758 15.7941 19.6469 15.7949 19.5152Z"
//             fill="#05493D"
//           />
//         </svg>
//       </div>
//     </div>
//   </div>
// );

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleOnLink = () => {
    setOpen(false);
  };
  const handleOnTryCraftClick = () => {
    navigate("/");
    setOpen(false);
  };
  const handleOnShhduleNowClick = () => {
    navigate("/scheduleNow");
    setOpen(false);
  };
  // const handleScroll = () => {
  //   const offset = window.scrollY;

  //   if (offset > 50) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // });
  return (
    <>
      <meta
        name="description"
        content="Crafter crews is a new and better way to communicate with all your film crew members. It’s faster, well organised and more convenient  than email or WhatsApp"
      />

      <meta property="og:title" content="Where collaboration happens" />

      <title> Crafter crews | Work communication app for film crews </title>
      <Header className="header">
        <div className="container">
          <div className="logo">
            <NavLink exact to="/">
              <img src={crafter} alt="crafter" />
            </NavLink>
          </div>
          <div className="allNavLinks">
            {/* <Popover content={content}>Demo</Popover> */}
            {linksItem.map((item, index) => (
              <NavLink
                exact
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "activeClassName" : "navLink"
                }
              >
                {item.linkName}
              </NavLink>
            ))}
          </div>
          <div className="hamBurgerMenu">
            {!open ? (
              <svg
                onClick={showDrawer}
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 40.5C8.3625 40.5 7.8285 40.284 7.398 39.852C6.966 39.4215 6.75 38.8875 6.75 38.25C6.75 37.6125 6.966 37.0785 7.398 36.648C7.8285 36.216 8.3625 36 9 36H45C45.6375 36 46.1715 36.216 46.602 36.648C47.034 37.0785 47.25 37.6125 47.25 38.25C47.25 38.8875 47.034 39.4215 46.602 39.852C46.1715 40.284 45.6375 40.5 45 40.5H9ZM9 29.25C8.3625 29.25 7.8285 29.034 7.398 28.602C6.966 28.1715 6.75 27.6375 6.75 27C6.75 26.3625 6.966 25.8277 7.398 25.3957C7.8285 24.9652 8.3625 24.75 9 24.75H45C45.6375 24.75 46.1715 24.9652 46.602 25.3957C47.034 25.8277 47.25 26.3625 47.25 27C47.25 27.6375 47.034 28.1715 46.602 28.602C46.1715 29.034 45.6375 29.25 45 29.25H9ZM9 18C8.3625 18 7.8285 17.7847 7.398 17.3542C6.966 16.9222 6.75 16.3875 6.75 15.75C6.75 15.1125 6.966 14.5778 7.398 14.1458C7.8285 13.7153 8.3625 13.5 9 13.5H45C45.6375 13.5 46.1715 13.7153 46.602 14.1458C47.034 14.5778 47.25 15.1125 47.25 15.75C47.25 16.3875 47.034 16.9222 46.602 17.3542C46.1715 17.7847 45.6375 18 45 18H9Z"
                  fill="#424242"
                />
              </svg>
            ) : (
              <svg
                onClick={onClose}
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00802 4.99439L16.5 13.4864L24.948 5.03839C25.1346 4.83977 25.3594 4.68088 25.6089 4.57125C25.8584 4.46162 26.1275 4.4035 26.4 4.40039C26.9835 4.40039 27.5431 4.63218 27.9557 5.04476C28.3682 5.45734 28.6 6.01691 28.6 6.60039C28.6051 6.87012 28.5551 7.13804 28.453 7.38773C28.3508 7.63742 28.1987 7.8636 28.006 8.05239L19.448 16.5004L28.006 25.0584C28.3686 25.4131 28.5812 25.8935 28.6 26.4004C28.6 26.9839 28.3682 27.5434 27.9557 27.956C27.5431 28.3686 26.9835 28.6004 26.4 28.6004C26.1196 28.612 25.8399 28.5652 25.5786 28.463C25.3172 28.3607 25.08 28.2052 24.882 28.0064L16.5 19.5144L8.03002 27.9844C7.84413 28.1764 7.62206 28.3297 7.37662 28.4354C7.13118 28.5411 6.86724 28.5972 6.60002 28.6004C6.01654 28.6004 5.45696 28.3686 5.04438 27.956C4.6318 27.5434 4.40002 26.9839 4.40002 26.4004C4.39489 26.1307 4.44493 25.8627 4.54708 25.6131C4.64922 25.3634 4.80131 25.1372 4.99402 24.9484L13.552 16.5004L4.99402 7.94239C4.63142 7.58766 4.4188 7.1073 4.40002 6.60039C4.40002 6.01691 4.6318 5.45734 5.04438 5.04476C5.45696 4.63218 6.01654 4.40039 6.60002 4.40039C7.12802 4.40699 7.63402 4.62039 8.00802 4.99439Z"
                  fill="#363535"
                />
              </svg>
            )}
          </div>
        </div>
      </Header>
      <Drawer
        placement="top"
        className="drawerMenu"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div className="mobileNavLinks">
          {linksItem.map((item, index) => (
            <NavLink
              exact
              to={item.to}
              key={index}
              onClick={handleOnLink}
              className={({ isActive }) =>
                isActive ? "activeClassName" : "navLink"
              }
            >
              {item.linkName}
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.0437 23.7375C7.76245 23.4563 7.62183 23.1232 7.62183 22.7385C7.62183 22.3545 7.76245 22.0219 8.0437 21.7406L16.2843 13.5L8.01558 5.23125C7.75308 4.96875 7.62183 4.64063 7.62183 4.24688C7.62183 3.85313 7.76245 3.51562 8.0437 3.23438C8.32495 2.95312 8.65795 2.8125 9.0427 2.8125C9.4267 2.8125 9.75933 2.95312 10.0406 3.23438L19.4906 12.7125C19.6031 12.825 19.683 12.9469 19.7302 13.0781C19.7767 13.2094 19.8 13.35 19.8 13.5C19.8 13.65 19.7767 13.7906 19.7302 13.9219C19.683 14.0531 19.6031 14.175 19.4906 14.2875L10.0125 23.7656C9.74995 24.0281 9.4267 24.1594 9.0427 24.1594C8.65795 24.1594 8.32495 24.0188 8.0437 23.7375Z"
                  fill="black"
                />
              </svg>
            </NavLink>
          ))}
        </div>
        {/* <div className="dropDownAndLogin">
          <Select
            className="selectDown"
            defaultValue="English (UK)"
            style={{
              width: "100%",
            }}
            bordered={false}
            options={[
              {
                value: "English (UK)",
                label: "English (UK)",
              },
              {
                value: "Lucy",
                label: "Lucy",
              },
            ]}
          />
          <AntdButton type="text" className="logOutBtn">
            Login
          </AntdButton>
        </div> */}
        <div className="btns">
          <Button
            type="secondary"
            title="Try Crafter"
            onClick={handleOnTryCraftClick}
            responsiveBtn="responsiveBtn"
          />
          <Button
            type="secondary"
            title="Schedule now"
            onClick={handleOnShhduleNowClick}
            responsiveBtn="responsiveBtn bgChangeresponsiveBtn"
          />
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
