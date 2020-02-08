import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Tab1 from "../assets/images/svg/tab_1.svg";
import Tab2 from "../assets/images/svg/tab_2.svg";
import Tab3 from "../assets/images/svg/tab_3.svg";
import Tab4 from "../assets/images/svg/tab_4.svg";
import Tab5 from "../assets/images/svg/tab_5.svg";
import Tab1h from "../assets/images/svg/tab_1_h.svg";
import Tab2h from "../assets/images/svg/tab_2_h.svg";
import Tab3h from "../assets/images/svg/tab_3_h.svg";
import Tab4h from "../assets/images/svg/tab_4_h.svg";
import Tab5h from "../assets/images/svg/tab_5_h.svg";

const FooterNav = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar fixed-bottom"
      style={{
        backgroundColor: "#474858",
        padding: "8px",
        paddingBottom: "20px"
      }}
    >
      <div className="navbar-nav d-flex flex-row justify-content-between align-items-center w-100">
        <Link to="/goals" className="nav-item nav-link">
          {location.pathname === "/goals" ? (
            <img src={Tab1h} />
          ) : (
            <img src={Tab1} />
          )}
        </Link>
        <Link to="/nutrition" className="nav-item nav-link">
          {location.pathname === "/nutrition" ? (
            <img src={Tab2h} />
          ) : (
            <img src={Tab2} />
          )}
        </Link>
        <Link to="/" className="nav-item nav-link">
          {location.pathname === "/" ? <img src={Tab3h} /> : <img src={Tab3} />}
        </Link>
        <Link to="/workout" className="nav-item nav-link">
          {location.pathname === "/workout" ? (
            <img src={Tab4h} />
          ) : (
            <img src={Tab4} />
          )}
        </Link>
        <Link to="/settings" className="nav-item nav-link">
          {location.pathname === "/settings" ? (
            <img src={Tab5h} />
          ) : (
            <img src={Tab5} />
          )}
        </Link>
      </div>
    </nav>
  );
};

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="col">
        <Nav />
        <div className="row">
          {window.innerWidth > 768 ? <div className="col" /> : ""}
          <div
            className="col"
            style={{ paddingTop: window.innerWidth > 576 ? "196px" : "164px" }}
          >
            {children}
            <Footer />
          </div>
          {window.innerWidth > 768 ? <div className="col" /> : ""}
        </div>
        <FooterNav />
      </div>
    );
  }
}

export default Layout;
