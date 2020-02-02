import React from "react";

const WorkoutAdd = () => {
  return (
    <div className="d-flex flex-column justify-content-start align-items-start w-100">
      <form className="d-flex flex-column justify-content-center align-items-center w-100">
        <h1
          className="display-4"
          style={{ fontSize: window.innerWidth < 576 ? "48px" : "48" }}
        >
          Add a new exercise
        </h1>
        <div className="form-group w-100 mt-4">
          <input
            type="text"
            className="form-control bg-dark"
            placeholder="Search for exercise"
            style={{
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderBottom: "4px solid var(--primary)",
              color: "white",
              width: "100%"
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default WorkoutAdd;
