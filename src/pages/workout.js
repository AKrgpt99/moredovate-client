import React, { Component } from "react";
import { Link } from "react-router-dom";

import Table from "../components/Table";
import TableRow from "../components/TableRow";
import TableContent from "../components/TableContent";
import TextButton from "../components/TextButton";

const EmptyContent = () => (
  <React.Fragment>
    <TableContent
      areaA={
        <React.Fragment>
          <h1
            className="text-right"
            style={{ color: "dimgray", fontSize: "24px" }}
          >
            Remaining
          </h1>
          <h1 style={{ lineHeight: "32px" }}>
            0
            <br />
            <span style={{ color: "var(--primary)", fontSize: "32px" }}>
              reps
            </span>
          </h1>
          <h1 style={{ lineHeight: "32px" }}>
            0
            <br />
            <span style={{ color: "var(--primary)", fontSize: "32px" }}>
              sets
            </span>
          </h1>
        </React.Fragment>
      }
      areaB={
        <React.Fragment>
          <h1
            className="text-right"
            style={{ color: "dimgray", fontSize: "18px" }}
          >
            Avg.
            <br />
            rest time
          </h1>
          <h4 className="text-right">
            1<span style={{ color: "var(--primary)" }}>min</span>
            <br />
            <span style={{ color: "var(--primary)" }}>/set</span>
          </h4>
        </React.Fragment>
      }
      areaC={
        <React.Fragment>
          <h1
            className="text-right"
            style={{ color: "dimgray", fontSize: "18px" }}
          >
            Avg.
            <br />
            heartrate
          </h1>
          <h4 className="text-right">
            60
            <br />
            <span style={{ color: "var(--primary)" }}>bpm</span>
          </h4>
        </React.Fragment>
      }
    />
    <div className="d-flex flex-column justify-content-end mt-4">
      <TextButton to="/nutrition/search?q=greek+salad">
        I DIDN'T DO THIS TODAY
      </TextButton>
      <TextButton to="/nutrition/search?q=greek+salad">
        EDIT EXERCISE
      </TextButton>
    </div>
  </React.Fragment>
);

class Workout extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-start align-items-start mt-4 w-100">
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-center m-4">
            <h1
              className="text-center"
              style={{ color: "dimgray", fontSize: "18px" }}
            >
              Last workout
            </h1>
            <h4 className="text-center">
              15 JAN,
              <br />
              <span style={{ color: "var(--primary)" }}>WED</span>
            </h4>
          </div>
          <Link
            to="/workout/start"
            className="col d-flex flex-column align-items-center justify-content-center mx-4 mb-4"
            style={{
              cursor: "pointer",
              width: "232px",
              height: "232px",
              borderRadius: "232px",
              border: "8px solid",
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(0,0,0,0.15))",
              color: "var(--primary)",
              textDecoration: "none"
            }}
          >
            <i className="fas fa-play mb-4" style={{ fontSize: "64px" }}></i>
            <h1 className="text-center" style={{ fontSize: "18px" }}>
              TAP TO
              <br />
              START
            </h1>
          </Link>
          <div className="col d-flex flex-column justify-content-center align-items-center m-4">
            <h1
              className="text-center"
              style={{ color: "dimgray", fontSize: "18px" }}
            >
              Next workout
            </h1>
            <h4 className="text-center">
              20 JAN,
              <br />
              <span style={{ color: "var(--primary)" }}>MON</span>
            </h4>
          </div>
        </div>
        <p className="lead mt-4" style={{ fontSize: "32px" }}>
          Exercises
        </p>
        <Table>
          <TableRow title="BENCH PRESS" completed showCompleted>
            <EmptyContent />
          </TableRow>
          <TableRow title="BARBELL ROW" completed showCompleted>
            <EmptyContent />
          </TableRow>
          <TableRow title="LATERAL RAISES" completed showCompleted>
            <EmptyContent />
          </TableRow>
          <TableRow title="TRICEP EXTENSIONS" showCompleted>
            <EmptyContent />
          </TableRow>
        </Table>
      </div>
    );
  }
}

export default Workout;
