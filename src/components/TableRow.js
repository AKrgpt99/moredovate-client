import React, { Component } from "react";

class TableRow extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false
    };
  }

  render() {
    const {
      title,
      completed,
      showCompleted,
      description,
      children
    } = this.props;
    return (
      <li
        className="list-group-item"
        style={{ color: "darkgray", cursor: "pointer" }}
        onClick={() => this.setState({ expanded: !this.state.expanded })}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <i
              className={`mr-4 fas fa-chevron-${
                this.state.expanded ? "down" : "right"
              }`}
            ></i>
            <h1 style={{ fontSize: "24px" }}>{title}</h1>
            {showCompleted ? (
              <React.Fragment>
                {completed ? (
                  <React.Fragment>
                    <div
                      className="m-3"
                      style={{
                        backgroundColor: "var(--success)",
                        width: "12px",
                        height: "12px",
                        borderRadius: "12px",
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(48,48,48,0.6))"
                      }}
                    />
                    {window.innerWidth > 576 ? (
                      <span style={{ color: "dimgray", lineHeight: "16px" }}>
                        Completed
                      </span>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div
                      className="m-3"
                      style={{
                        backgroundColor: "var(--danger)",
                        width: "12px",
                        height: "12px",
                        borderRadius: "12px",
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(48,48,48,0.6))"
                      }}
                    />
                    {window.innerWidth > 576 ? (
                      <span style={{ color: "dimgray", lineHeight: "16px" }}>
                        Not completed
                      </span>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                )}
              </React.Fragment>
            ) : (
              ""
            )}
          </div>
          <div
            style={{
              color: "darkgray",
              fontSize: "12px",
              marginLeft: "24px"
            }}
          >
            {description}
          </div>
        </div>
        {this.state.expanded ? children : ""}
      </li>
    );
  }
}

export default TableRow;
