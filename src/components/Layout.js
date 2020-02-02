import React, { Component } from "react";

import Nav from "./Nav";
import Footer from "./Footer";

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
      </div>
    );
  }
}

export default Layout;
