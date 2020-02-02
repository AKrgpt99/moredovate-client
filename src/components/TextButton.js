import React from "react";
import { Link } from "react-router-dom";

const TextButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="custom-btn align-self-end btn bg-transparent d-flex"
    >
      <h1 style={{ fontSize: window.innerWidth > 768 ? "24px" : "16px" }}>
        {children}
      </h1>
      <i
        className="fas fa-chevron-right"
        style={{ fontSize: "24px", marginLeft: "24px" }}
      ></i>
    </Link>
  );
};

export default TextButton;
