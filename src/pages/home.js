import React, { Component } from "react";

import Table from "../components/Table";
import TableRow from "../components/TableRow";
import TableContent from "../components/TableContent";

const WorkoutContent = () => (
  <TableContent
    areaA={
      <React.Fragment>
        <h1 style={{ color: "dimgray", fontSize: "24px" }}>
          Total Workout Volume
        </h1>
        <h1 style={{ lineHeight: "32px" }}>
          4500
          <br />
          <span style={{ color: "var(--primary)", fontSize: "32px" }}>
            pounds
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
          Avg. Rest Time
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
          Avg. Heartbeat
        </h1>
        <h4 className="text-right">
          60
          <br />
          <span style={{ color: "var(--primary)" }}>bpm</span>
        </h4>
      </React.Fragment>
    }
  />
);

const NutritionContent = () => (
  <TableContent
    areaA={
      <React.Fragment>
        <h1 style={{ color: "dimgray", fontSize: "24px" }}>Calories</h1>
        <h1 style={{ lineHeight: "32px" }}>
          1050
          <span style={{ color: "var(--primary)" }}>cal</span>
          <br />
          <span style={{ color: "var(--primary)", fontSize: "32px" }}>
            /3000
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
          Protein
        </h1>
        <h4 className="text-right">
          75<span style={{ color: "var(--primary)" }}>g</span>
          <br />
          <span style={{ color: "var(--primary)" }}>/150</span>
        </h4>
      </React.Fragment>
    }
    areaC={
      <React.Fragment>
        <h1
          className="text-right"
          style={{ color: "dimgray", fontSize: "18px" }}
        >
          Carbs
        </h1>
        <h4 className="text-right">
          152<span style={{ color: "var(--primary)" }}>g</span>
          <br />
          <span style={{ color: "var(--primary)" }}>/384</span>
        </h4>
      </React.Fragment>
    }
    areaD={
      <React.Fragment>
        <h1
          className="text-right"
          style={{ color: "dimgray", fontSize: "18px" }}
        >
          Fat
        </h1>
        <h4 className="text-right">
          65<span style={{ color: "var(--primary)" }}>g</span>
          <br />
          <span style={{ color: "var(--primary)" }}>/95</span>
        </h4>
      </React.Fragment>
    }
  />
);

class Home extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-start align-items-start mt-4">
        <h1
          className="display-4"
          style={{ fontSize: window.innerWidth < 576 ? "48px" : "48" }}
        >
          Welcome back John,
        </h1>
        <p className="lead mb-4" style={{ fontSize: "32px" }}>
          here's your daily summary
        </p>
        <Table>
          <TableRow
            title="WORKOUT"
            completed
            showCompleted
            description={
              window.innerWidth > 768
                ? "Tip: higher workout volume leads to higher strength and size gains"
                : null
            }
          >
            <WorkoutContent />
          </TableRow>
          <TableRow
            title="NUTRITION"
            showCompleted
            description={
              window.innerWidth > 768
                ? "Tip: fat should be in the range of 20% to 35% of the calories you eat"
                : null
            }
          >
            <NutritionContent />
          </TableRow>
        </Table>
      </div>
    );
  }
}

export default Home;
