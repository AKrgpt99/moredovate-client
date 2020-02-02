import React, { Component } from "react";
import { useLocation, Link } from "react-router-dom";

const FooterButton = ({ to, children }) => (
  <Link to={to} className="custom-btn align-self-end btn bg-transparent d-flex">
    <h1 style={{ fontSize: window.innerWidth > 768 ? "24px" : "16px" }}>
      {children}
    </h1>
    <i
      className="fas fa-chevron-right"
      style={{ fontSize: "24px", marginLeft: "24px" }}
    ></i>
  </Link>
);

const FooterButtonWithNotification = ({ to, color, children }) => (
  <Link
    to={to}
    className="custom-btn btn align-self-end align-items-center d-flex"
  >
    <div
      style={{
        backgroundColor: color,
        width: "12px",
        height: "12px",
        borderRadius: "12px",
        marginLeft: "24px",
        marginRight: "16px",
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(48,48,48,0.6))"
      }}
    />
    <h1 style={{ fontSize: window.innerWidth > 768 ? "24px" : "16px" }}>
      {children}
    </h1>
    <i
      className="fas fa-chevron-right"
      style={{ fontSize: "24px", marginLeft: "24px" }}
    ></i>
  </Link>
);

const IndexFooter = () => (
  <React.Fragment>
    <FooterButtonWithNotification to="/nutrition" color="var(--danger)">
      FILL OUT REMAINING NUTRITION
    </FooterButtonWithNotification>
    <FooterButton to="/charts">VIEW PROGRESS CHARTS</FooterButton>
  </React.Fragment>
);

const WorkoutFooter = () => (
  <React.Fragment>
    <FooterButton to="/workout/add">ADD NEW EXERCISE</FooterButton>
    <FooterButton to="/workout/edit">EDIT WORKOUT</FooterButton>
    <FooterButton to="/workout/search">SEARCH MORE EXERCISES</FooterButton>
    <FooterButton to="/workout/history">VIEW PAST WORKOUTS</FooterButton>
  </React.Fragment>
);

const NutritionFooter = () => (
  <React.Fragment>
    <FooterButton to="/nutrition/edit">ADD NEW MEAL</FooterButton>
    <FooterButton to="/nutrition/search">SEARCH MORE MEALS</FooterButton>
    <FooterButton to="/nutrition/history">VIEW PAST MEALS</FooterButton>
  </React.Fragment>
);

const WorkoutStartFooter = () => (
  <React.Fragment>
    <FooterButton to="/">END WORKOUT</FooterButton>
  </React.Fragment>
);

const Footer = () => {
  let location = useLocation();
  return (
    <div
      className="mt-4 d-flex flex-column justify-content-end align-items-end"
      style={{ width: "100%", marginBottom: "96px" }}
    >
      {location.pathname === "/" ? (
        <IndexFooter />
      ) : location.pathname === "/workout" ? (
        <WorkoutFooter />
      ) : location.pathname === "/nutrition" ? (
        <NutritionFooter />
      ) : location.pathname === "/workout/start" ? (
        <WorkoutStartFooter />
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
