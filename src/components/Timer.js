import React, { Component } from "react";
import moment from "moment";

const Timer = ({ title, seconds }) => {
  return (
    <React.Fragment>
      <h1
        className="text-center mt-3"
        style={{ color: "dimgray", fontSize: "18px" }}
      >
        {title}
      </h1>
      <h4 className="text-center">
        {moment()
          .minute(Math.floor(seconds / 60))
          .format("m")}
        <span style={{ color: "var(--primary)" }}>m</span>{" "}
        {moment()
          .second(seconds)
          .format("s")}
        <span style={{ color: "var(--primary)" }}>s</span>
      </h4>
    </React.Fragment>
  );
};

export default Timer;
