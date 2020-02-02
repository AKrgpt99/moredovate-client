import React, { Component } from "react";

class TableContent extends Component {
  render() {
    const { areaA, areaB, areaC, areaD } = this.props;
    return (
      <div className="d-flex align-items-center justify-content-between mt-3 w-100">
        <div className="d-flex flex-column justify-content-start align-items-start">
          <div className="col mt-2">{areaA}</div>
        </div>
        {areaB || areaC || areaD ? (
          <div className="d-flex flex-column align-items-center justify-content-center">
            {areaB ? <div className="col mt-2">{areaB}</div> : ""}
            {areaC ? <div className="col mt-2">{areaC}</div> : ""}
            {areaD ? <div className="col mt-2">{areaD}</div> : ""}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TableContent;
