import React from "react";
import { useLocation, Link } from "react-router-dom";

const FabNav = () => {
  let [open, setOpen] = React.useState(false);
  let location = useLocation();

  return (
    <div className="d-flex justify-content-start align-items-center">
      <Link
        className="custom-bottom-nav btn btn-primary d-flex justify-content-center align-items-center"
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "64px",
          position: "fixed",
          zIndex: "1000",
          bottom: "32px",
          left: window.innerWidth > 576 ? "32%" : "8%"
        }}
        onClick={() => setOpen(!open)}
      >
        {open ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
      </Link>
      {open ? (
        <div
          className="custom-bottom-nav d-flex align-items-center bg-secondary"
          style={{
            height: "64px",
            borderRadius: "32px",
            position: "fixed",
            zIndex: "1000",
            bottom: "32px",
            left: window.innerWidth > 576 ? "38%" : "32%"
          }}
        >
          <Link
            to="/goals"
            className="custom-bottom-nav"
            style={{
              color:
                location.pathname === "/goals" ? "var(--primary)" : "inherit"
            }}
            onClick={() => setOpen(false)}
          >
            <i className="fas fa-star m-4" />
          </Link>
          <Link
            to="/"
            className="custom-bottom-nav"
            style={{
              color:
                location.pathname === "/" ||
                location.pathname === "/workout" ||
                location.pathname === "/nutrition"
                  ? "var(--primary)"
                  : "inherit"
            }}
            onClick={() => setOpen(false)}
          >
            <i className="fas fa-home m-4" />
          </Link>
          <Link
            to="/settings"
            className="custom-bottom-nav"
            style={{
              color:
                location.pathname === "/settings" ? "var(--primary)" : "inherit"
            }}
            onClick={() => setOpen(false)}
          >
            <i className="fas fa-cog m-4" />
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

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
      <nav className="navbar d-flex flex-column justify-content-center align-items-center mt-4">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginBottom: "-12px" }}
        >
          <h1 style={{ fontSize: "18px", color: "darkgray" }}>MOREDOVATE</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center w-100">
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
              <i className="fas fa-chevron-left" style={{ fontSize: "24px" }} />
            </Link>
          ) : (
            ""
          )}
          <h1
            className="mx-4"
            style={{ fontSize: window.innerWidth > 576 ? "32" : "32px" }}
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
              <i
                className="fas fa-chevron-right"
                style={{ fontSize: "24px" }}
              />
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
                border: "1px solid white",
                width: "12px",
                height: "12px",
                borderRadius: "12px",
                margin: "12px",
                backgroundColor:
                  location.pathname === "/nutrition" ? "white" : ""
              }}
            />
            <div
              style={{
                border: "1px solid white",
                width: "12px",
                height: "12px",
                borderRadius: "12px",
                margin: "12px",
                backgroundColor: location.pathname === "/" ? "white" : ""
              }}
            />
            <div
              style={{
                border: "1px solid white",
                width: "12px",
                height: "12px",
                borderRadius: "12px",
                margin: "12px",
                backgroundColor: location.pathname === "/workout" ? "white" : ""
              }}
            />
          </div>
        ) : (
          ""
        )}
      </nav>
      <FabNav />
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
