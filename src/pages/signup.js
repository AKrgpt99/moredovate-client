import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

// TODO: implement redux action and backend route
const signup1 = (userData, history) => {
  Axios.post("/signup/1", userData)
    .then(res => history.push("/signup/2"))
    .catch(err => history.push("/signup/2"));
};

// TODO implement redux action and backend route
const signup2 = (userData, history) => {
  Axios.post("/signup/2", userData)
    .then(res => history.push("/"))
    .catch(err => history.push("/"));
};

// TODO implement redux action and backend route
const signup3 = (userData, history) => {
  Axios.post("/signup/3", userData)
    .then(res => history.push("/"))
    .catch(err => history.push("/"));
};

const StepOne = () => {
  let [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState(""),
    [birthday, setBirthday] = useState("");

  let history = useHistory();

  return (
    <form className="d-flex flex-column justify-content-center align-items-center w-100">
      <h1 style={{ fontSize: "32px", marginBottom: "32px" }}>
        BASIC INFORMATION
      </h1>
      <div className="form-group w-100">
        <input
          type="text"
          className="form-control bg-dark"
          placeholder="name"
          style={{
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "4px solid var(--primary)",
            color: "white",
            width: "100%"
          }}
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </div>
      <div className="form-group w-100">
        <input
          type="text"
          className="form-control bg-dark"
          placeholder="email"
          style={{
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "4px solid var(--primary)",
            color: "white",
            width: "100%"
          }}
          onChange={event => setEmail(event.target.value)}
          value={email}
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
            borderBottom: "4px solid var(--primary)",
            color: "white",
            width: "100%"
          }}
          onChange={event => setPassword(event.target.value)}
          value={password}
        />
      </div>
      <div className="form-group w-100">
        <input
          type="password"
          className="form-control bg-dark"
          placeholder="confirm password"
          style={{
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "4px solid var(--primary)",
            color: "white",
            width: "100%"
          }}
          onChange={event => setConfirmPassword(event.target.value)}
          value={confirmPassword}
        />
      </div>
      <div className="form-group row d-flex flex-row justify-content-between align-items-center w-100">
        <h1 style={{ fontSize: "24px", marginRight: "24px" }}>BIRTHDAY</h1>
        <input
          type="date"
          className="form-control bg-dark text-center w-auto"
          style={{
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "4px solid var(--primary)",
            padding: 0,
            borderRadius: "5px",
            paddingLeft: "8px",
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(48,48,48,0.6))",
            fontSize: window.innerWidth < 576 ? "12px" : "inherit",
            color: "darkgray"
          }}
          onChange={event => setBirthday(event.target.value)}
          value={birthday}
        />
      </div>
      <Link
        className="btn btn-dark btn-block mt-4"
        style={{
          backgroundColor: "var(--indigo)",
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(48,48,48,0.6))"
        }}
        onClick={() =>
          signup1({ name, email, password, confirmPassword, birthday }, history)
        }
      >
        next
      </Link>
      <Link to="/login" className="btn btn-outline-light btn-block">
        back
      </Link>
    </form>
  );
};

const StepTwo = () => {
  let [weight, setWeight] = useState(""),
    [height, setHeight] = useState(""),
    [gender, setGender] = useState("female"),
    [fitnessLevel, setFitnessLevel] = useState("beginner");

  let history = useHistory();

  return (
    <form className="d-flex flex-column justify-content-center align-items-center w-100">
      <h1 style={{ fontSize: "32px", marginBottom: "32px" }}>SPECFIFICS</h1>
      <button
        className="btn btn-outline-primary mb-4"
        onClick={event => alert("Not available right now")}
      >
        Pair Fitness Hardware
      </button>
      <div className="form-group w-100">
        <input
          type="number"
          className="form-control bg-dark"
          placeholder="weight"
          style={{
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderColor: "#000",
            color: "white",
            borderBottom: "4px solid var(--primary)"
          }}
          onChange={event => setWeight(event.target.value)}
          value={weight}
        />
      </div>
      <div className="form-group w-100">
        <input
          type="number"
          className="form-control bg-dark"
          placeholder="height"
          style={{
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderColor: "#000",
            color: "white",
            borderBottom: "4px solid var(--primary)"
          }}
          onChange={event => setHeight(event.target.value)}
          value={height}
        />
      </div>
      <div className="form-group d-flex align-items-center justify-content-between w-100">
        <h1 style={{ fontSize: "24px", marginRight: "24px" }}>GENDER</h1>
        <select
          className="form-control bg-dark"
          placeholder="Fitness level"
          style={{
            color: "darkgray",
            borderBottom: "4px solid var(--primary)",
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(48,48,48,1))"
          }}
          onChange={event => setGender(event.target.value)}
          value={gender}
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group d-flex align-items-center justify-content-between w-100">
        <h1 style={{ fontSize: "24px", marginRight: "24px" }}>FITNESS LEVEL</h1>
        <select
          className="form-control bg-dark"
          placeholder="Fitness level"
          style={{
            color: "darkgray",
            borderBottom: "4px solid var(--primary)",
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(48,48,48,1))"
          }}
          onChange={event => setFitnessLevel(event.target.value)}
          value={fitnessLevel}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <Link
        className="btn btn-dark btn-block mt-4"
        style={{
          backgroundColor: "var(--indigo)",
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(48,48,48,0.6))"
        }}
        onClick={() =>
          signup2({ weight, height, gender, fitnessLevel }, history)
        }
      >
        continue
      </Link>
      <Link to="/signup/1" className="btn btn-outline-light btn-block">
        back
      </Link>
    </form>
  );
};

// TODO: finish goals section
const StepThree = () => {
  return (
    <form className="d-flex flex-column justify-content-center align-items-center w-100">
      <h1 style={{ fontSize: "32px", marginBottom: "32px" }}>ADD A GOAL</h1>
      <div className="form-group w-100">
        <h1
          style={{ fontSize: "24px", color: "darkgray", marginBottom: "12px" }}
        >
          SUGGESTED GOALS
        </h1>
        <div
          className="custom-control custom-radio"
          style={{
            borderBottom: "2px solid var(--primary)",
            padding: "24px"
          }}
        >
          <input
            type="radio"
            className="custom-control-input"
            id="goal1"
            name="suggestedGoalsList"
          />
          <label
            className="custom-control-label"
            htmlFor="goal1"
            style={{ color: "white" }}
          >
            Lose 5 pounds
          </label>
        </div>
        <div
          className="custom-control custom-radio"
          style={{
            borderBottom: "2px solid var(--primary)",
            padding: "24px"
          }}
        >
          <input
            type="radio"
            className="custom-control-input"
            id="goal2"
            name="suggestedGoalsList"
          />
          <label
            className="custom-control-label"
            htmlFor="goal2"
            style={{ color: "white" }}
          >
            Bigger chest
          </label>
        </div>
        <div
          className="custom-control custom-radio"
          style={{
            borderBottom: "2px solid var(--primary)",
            padding: "24px"
          }}
        >
          <input
            type="radio"
            className="custom-control-input"
            id="goal3"
            name="suggestedGoalsList"
          />
          <label
            className="custom-control-label"
            htmlFor="goal3"
            style={{ color: "white" }}
          >
            12% body-fat
          </label>
        </div>
        <Link
          className="w-100 btn d-flex justify-content-end align-items-center mt-4 custom-btn bg-transgender"
          style={{ cursor: "pointer" }}
        >
          <h1 style={{ fontSize: "24px" }}>OR ENTER MANUALLY</h1>
          <i
            className="fas fa-chevron-right"
            style={{ fontSize: "24px", marginLeft: "24px" }}
          ></i>
        </Link>
        <Link
          className="btn btn-dark btn-block mt-4"
          style={{
            backgroundColor: "var(--indigo)",
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(48,48,48,0.6))"
          }}
        >
          sign up
        </Link>
        <Link to="/signup/2" className="btn btn-outline-light btn-block">
          back
        </Link>
      </div>
    </form>
  );
};

class Signup extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        {location.pathname.split("/")[2] === "1" ? (
          <StepOne />
        ) : location.pathname.split("/")[2] === "2" ? (
          <StepTwo />
        ) : location.pathname.split("/")[2] === "3" ? (
          <StepThree />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Signup;
