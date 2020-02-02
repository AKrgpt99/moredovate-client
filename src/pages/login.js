import React, { Component } from "react";
import { Link } from "react-router-dom";

import IconLogo from "../assets/images/icon-logo.png";

class Login extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          src={IconLogo}
          style={{ width: "50%", height: "256px", objectFit: "contain" }}
          alt="Logo"
        />
        <form className="d-flex flex-column justify-content-center align-items-center mt-4 w-100">
          <div className="form-group w-100">
            <input
              type="text"
              className="form-control bg-dark"
              placeholder="email"
              style={{
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderColor: "#000",
                color: "white",
                borderBottom: "2px solid var(--primary)"
              }}
            />
          </div>
          <div className="form-group w-100">
            <input
              type="password"
              className="form-control bg-dark"
              placeholder="password"
              style={{
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderColor: "#000",
                color: "white",
                borderBottom: "2px solid var(--primary)"
              }}
            />
          </div>
          <Link
            className="btn btn-dark btn-block mt-4"
            style={{
              backgroundColor: "var(--indigo)",
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(48,48,48,0.6))"
            }}
          >
            login
          </Link>
          <Link className="btn btn-outline-light btn-block" to="/signup/1">
            signup
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
