import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TextButton from "../components/TextButton";
import TableContent from "../components/TableContent";
import Timer from "../components/Timer";

import Rest from "../assets/images/svg/timer.svg";
import HeartBeat from "../assets/images/svg/heartbeat.svg";
import Weight from "../assets/images/svg/weight.svg";

const WorkoutStart = () => {
  let [restingState, setRestingState] = useState(false),
    [restCount, setRestCount] = useState(0);
  useEffect(() => {
    if (!restingState) {
      setRestCount(0);
    }
    let interval = setInterval(() => setRestCount(restCount + 1), 1000);
    return () => clearInterval(interval);
  }, [restCount, restingState]);

  let [activeCount, setActiveCount] = useState(0);
  useEffect(() => {
    if (restingState) {
      setActiveCount(0);
    }
    let interval = setInterval(() => setActiveCount(activeCount + 1), 1000);
    return () => clearInterval(interval);
  }, [activeCount, restingState]);

  let [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => setTotalCount(totalCount + 1), 1000);
    return () => clearInterval(interval);
  }, [totalCount]);

  return (
    <div className="d-flex flex-column justify-content-start align-items-start mt-4 w-100">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center m-4">
          {restingState ? (
            <Timer seconds={restCount} title="Rest" />
          ) : (
            <Timer seconds={activeCount} title="Active" />
          )}
          <Timer seconds={totalCount} title="Total Time" />
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
          onClick={() => setRestingState(!restingState)}
        >
          <i
            className={`fas fa-${!restingState ? "pause" : "play"} mb-4`}
            style={{ fontSize: "64px" }}
          ></i>
          <h1 className="text-center" style={{ fontSize: "18px" }}>
            TAP TO
            <br />
            START
            <br />
            {!restingState ? "REST" : "SET"}
          </h1>
        </Link>
        <div className="col d-flex flex-column justify-content-center align-items-center m-4">
          <h1
            className="text-center"
            style={{ color: "dimgray", fontSize: "18px" }}
          >
            Next exercise
          </h1>
          <h4 className="text-center">BARBELL ROW</h4>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-center align-items-center mt-4">
        <Link className="custom-link">
          <i className="fas fa-chevron-left" style={{ fontSize: "24px" }} />
        </Link>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1
            className=" text-center mx-4"
            style={{ color: "dimgray", fontSize: "18px" }}
          >
            Current
          </h1>
          <h1 className=" text-center mx-4" style={{ fontSize: "32px" }}>
            BENCH PRESS
          </h1>
        </div>
        <Link className="custom-link">
          <i className="fas fa-chevron-right" style={{ fontSize: "24px" }} />
        </Link>
      </div>
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
          <div className="d-flex align-items-center justify-content-center">
            {window.innerWidth > 320 ? (
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={Rest}
                  style={{
                    width: "48px",
                    height: "48px",
                    marginRight: "32px",
                    objectFit: "contain"
                  }}
                  alt="Rest clock"
                />
              </div>
            ) : (
              ""
            )}
            <div className="d-flex flex-column align-items-end justify-content-end">
              <h1
                className="text-right"
                style={{ color: "dimgray", fontSize: "18px" }}
              >
                Avg.
                <br />
                rest time
              </h1>
              <h4 className="text-center">
                0<span style={{ color: "var(--primary)" }}>m</span> 10
                <span style={{ color: "var(--primary)" }}>s</span>
              </h4>
            </div>
          </div>
        }
        areaC={
          <div className="d-flex align-items-center justify-content-center">
            {window.innerWidth > 320 ? (
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={HeartBeat}
                  style={{
                    width: "48px",
                    height: "48px",
                    marginRight: "32px",
                    objectFit: "contain"
                  }}
                  alt="Rest clock"
                />
              </div>
            ) : (
              ""
            )}
            <div className="d-flex flex-column align-items-end justify-content-end">
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
            </div>
          </div>
        }
        areaD={
          <div className="d-flex align-items-center justify-content-center">
            {window.innerWidth > 320 ? (
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={Weight}
                  style={{
                    width: "48px",
                    height: "48px",
                    marginRight: "32px",
                    objectFit: "contain"
                  }}
                  alt="Weight"
                />
              </div>
            ) : (
              ""
            )}
            <div className="d-flex flex-column align-items-end justify-content-end">
              <h1
                className="text-right"
                style={{ color: "dimgray", fontSize: "18px" }}
              >
                Avg.
                <br />
                weight
              </h1>
              <h4 className="text-right">
                180
                <br />
                <span style={{ color: "var(--primary)" }}>lbs</span>
              </h4>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default WorkoutStart;
