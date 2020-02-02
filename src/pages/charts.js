import React from "react";
import { VictoryBar, VictoryLine, VictoryBoxPlot, VictoryTheme } from "victory";

const Chart = ({ children, title }) => (
  <div
    className="d-flex flex-column justify-content-center align-items-center w-100 p-4 mb-2"
    style={{
      borderRadius: "12px",
      backgroundImage:
        "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(0,0,0,0))"
    }}
  >
    <h1 className="text-right align-self-start" style={{ fontSize: "32px" }}>
      {title}
    </h1>
    {children}
  </div>
);

const ExampleChartList = () => (
  <div className="d-flex flex-column justify-content-center w-100">
    <Chart title="WEIGHT">
      <VictoryBar
        theme={VictoryTheme.material}
        domainPadding={16}
        height={128}
        data={[
          { x: 0, y: 3 },
          { x: 1, y: 1.7 },
          { x: 2, y: 1.2 },
          { x: 3, y: 0.5 }
        ]}
        maxDomain={{ y: 2 }}
        minDomain={{ y: 0 }}
      />
    </Chart>
    <Chart title="SLEEP">
      <VictoryBoxPlot
        boxWidth={20}
        height={128}
        theme={VictoryTheme.material}
        data={[
          { x: 1, y: [0.1, 2] },
          { x: 2, y: [0.5, 1.5] },
          { x: 3, y: [0.75, 1.7] },
          { x: 4, y: [0.7, 2] }
        ]}
        maxDomain={{ y: 1 }}
        minDomain={{ y: 0 }}
      />
    </Chart>
    <Chart title="BODYFAT">
      <VictoryLine
        theme={VictoryTheme.material}
        height={128}
        data={[
          { x: 0, y: 0 },
          { x: 1, y: 2 },
          { x: 2, y: 0.5 },
          { x: 2.5, y: 3 }
        ]}
        maxDomain={{ y: 2 }}
        minDomain={{ y: 0 }}
      />
    </Chart>
  </div>
);

const Charts = () => {
  return (
    <div className="d-flex flex-column justify-content-start align-items-start mt-4">
      <h1
        className="display-4"
        style={{ fontSize: window.innerWidth < 576 ? "48px" : "48" }}
      >
        Your data,
      </h1>
      <p className="lead mb-4" style={{ fontSize: "32px" }}>
        organized in graphs
      </p>
      <ExampleChartList />
    </div>
  );
};

export default Charts;
