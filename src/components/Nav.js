import React from "react";
import { useLocation, Link } from "react-router-dom";

import rightArrow from "../assets/images/svg/right_arrow.svg";
import leftArrow from "../assets/images/svg/left_arrow.svg";
import Logo from "../assets/images/svg/Logo.svg";

const LoginNav = () => (
  <nav className="navbar d-flex justify-content-center align-items-center">
    <h1 className="mt-4">WELCOME</h1>
  </nav>
);

const RegisterNav = () => {
  let location = useLocation();
  return (
    <nav className="navbar d-flex flex-column justify-content-center align-items-center">
      <h1 className="mt-4">SIGN UP</h1>
      <div className="d-flex justify-content-center">
        <div
          style={{
            border: "1px solid white",
            width: "12px",
            height: "12px",
            borderRadius: "12px",
            margin: "12px",
            backgroundColor:
              location.pathname.split("/")[2] === "1" ? "white" : ""
          }}
        />
        <div
          style={{
            border: "1px solid white",
            width: "12px",
            height: "12px",
            borderRadius: "12px",
            margin: "12px",
            backgroundColor:
              location.pathname.split("/")[2] === "2" ? "white" : ""
          }}
        />
        <div
          style={{
            border: "1px solid white",
            width: "12px",
            height: "12px",
            borderRadius: "12px",
            margin: "12px",
            backgroundColor:
              location.pathname.split("/")[2] === "3" ? "white" : ""
          }}
        />
      </div>
    </nav>
  );
};

const DefaultNav = () => {
  let location = useLocation();
  return (
    <React.Fragment>
      <nav
        className="navbar d-flex flex-column justify-content-center align-items-center pt-4"
        style={{ backgroundColor: "#474858" }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginBottom: "9px" }}
        >
          <img src={Logo} />
        </div>
        <div
          className={`d-flex justify-content-${
            location.pathname === "/" ||
            location.pathname === "/nutrition" ||
            location.pathname === "/workout"
              ? "between"
              : "center"
          } align-items-center w-100`}
        >
          {location.pathname === "/" ||
          location.pathname === "/workout" ||
          location.pathname === "/nutrition" ? (
            <Link
              to={
                location.pathname === "/"
                  ? "/nutrition"
                  : location.pathname === "/workout"
                  ? "/"
                  : "/workout"
              }
              className="custom-link"
            >
              <img className="" src={leftArrow} />
            </Link>
          ) : (
            ""
          )}
          <h1
            className="mx-4"
            style={{ fontSize: window.innerWidth > 576 ? "30" : "30px" }}
          >
            {location.pathname.split("/")[1] === ""
              ? "DASHBOARD"
              : location.pathname.split("/")[1] === "workout"
              ? "WORKOUT"
              : location.pathname.split("/")[1] === "nutrition"
              ? "NUTRITION"
              : location.pathname.split("/")[1] === "charts"
              ? "CHARTS"
              : ""}
          </h1>
          {location.pathname === "/" ||
          location.pathname === "/workout" ||
          location.pathname === "/nutrition" ? (
            <Link
              to={
                location.pathname === "/"
                  ? "/workout"
                  : location.pathname === "/nutrition"
                  ? "/"
                  : "/nutrition"
              }
              className="custom-link"
            >
              <img src={rightArrow} />
            </Link>
          ) : (
            ""
          )}
        </div>
        {location.pathname === "/" ||
        location.pathname === "/workout" ||
        location.pathname === "/nutrition" ? (
          <div className="d-flex justify-content-center">
            <div
              style={{
                border: "1px solid #A9A9AF",
                width: "6.5px",
                height: "6.5px",
                borderRadius: "6.5px",
                margin: "6.5px",
                backgroundColor:
                  location.pathname === "/nutrition" ? "#A9A9AF" : ""
              }}
            />
            <div
              style={{
                border: "1px solid #A9A9AF",
                width: "6.5px",
                height: "6.5px",
                borderRadius: "6.5px",
                margin: "6.5px",
                backgroundColor: location.pathname === "/" ? "#A9A9AF" : ""
              }}
            />
            <div
              style={{
                border: "1px solid #A9A9AF",
                width: "6.5px",
                height: "6.5px",
                borderRadius: "6.5px",
                margin: "6.5px",
                backgroundColor:
                  location.pathname === "/workout" ? "#A9A9AF" : ""
              }}
            />
          </div>
        ) : (
          ""
        )}
      </nav>
      {/* <FabNav /> */}
    </React.Fragment>
  );
};

const Nav = () => {
  let location = useLocation();
  return (
    <div
      className="position-fixed w-100 bg-dark"
      style={{ top: 0, left: 0, zIndex: 2000 }}
    >
      {location.pathname.split("/")[1] !== "login" &&
      location.pathname.split("/")[1] !== "signup" ? (
        <DefaultNav />
      ) : location.pathname.split("/")[1] === "login" ? (
        <LoginNav />
      ) : location.pathname.split("/")[1] === "signup" ? (
        <RegisterNav />
      ) : (
        "Error"
      )}
    </div>
  );
};

export default Nav;
