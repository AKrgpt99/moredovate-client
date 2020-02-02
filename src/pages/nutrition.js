import React, { Component } from "react";

import Table from "../components/Table";
import TableRow from "../components/TableRow";
import TableContent from "../components/TableContent";
import TextButton from "../components/TextButton";

import Steak from "../assets/images/svg/meat_steak.svg";
import Bread from "../assets/images/svg/bread.svg";
import Fat from "../assets/images/svg/fat.svg";

const NutritionSummary = () => (
  <TableContent
    areaA={
      <div className="d-flex flex-column align-items-start">
        <div className="d-flex flex-column align-items-start">
          <h1 style={{ color: "dimgray", fontSize: "24px" }}>Calories</h1>
          <h1 style={{ lineHeight: "32px" }}>
            1050
            <span style={{ color: "var(--primary)" }}>cal</span>
            <br />
            <span style={{ color: "var(--primary)", fontSize: "32px" }}>
              /3000
            </span>
          </h1>
        </div>
        <div className="d-flex flex-column align-items-start mt-2">
          <h1 style={{ color: "dimgray", fontSize: "24px" }}>Last meal</h1>
          <h1 style={{ fontSize: "24px" }}>CAESAR SALAD</h1>
        </div>
      </div>
    }
    areaB={
      <div className="d-flex align-items-center justify-content-center">
        {window.innerWidth > 320 ? (
          <div className="d-flex align-items-center">
            <img
              src={Steak}
              style={{
                width: "48px",
                height: "48px",
                marginRight: "32px",
                objectFit: "contain"
              }}
              alt="Protein indicator"
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
            Protein
          </h1>
          <h4 className="text-right">
            75<span style={{ color: "var(--primary)" }}>g</span>
            <br />
            <span style={{ color: "var(--primary)" }}>/150</span>
          </h4>
        </div>
      </div>
    }
    areaC={
      <div className="d-flex align-items-center justify-content-center">
        {window.innerWidth > 320 ? (
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={Bread}
              style={{
                width: "48px",
                height: "48px",
                marginRight: "32px",
                objectFit: "contain"
              }}
              alt="Carb indicator"
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
            Carbs
          </h1>
          <h4 className="text-right">
            152<span style={{ color: "var(--primary)" }}>g</span>
            <br />
            <span style={{ color: "var(--primary)" }}>/384</span>
          </h4>
        </div>
      </div>
    }
    areaD={
      <div className="d-flex align-items-center justify-content-center">
        {window.innerWidth > 320 ? (
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={Fat}
              style={{
                width: "48px",
                height: "48px",
                marginRight: "32px",
                objectFit: "contain"
              }}
              alt="Fat indicator"
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
            Fat
          </h1>
          <h4 className="text-right">
            65<span style={{ color: "var(--primary)" }}>g</span>
            <br />
            <span style={{ color: "var(--primary)" }}>/95</span>
          </h4>
        </div>
      </div>
    }
  />
);

const ExampleContent = () => (
  <React.Fragment>
    <TableContent
      areaA={
        <React.Fragment>
          <h1 style={{ color: "dimgray", fontSize: "24px" }}>Calories</h1>
          <h1 style={{ lineHeight: "32px" }}>
            1050
            <br />
            <span style={{ color: "var(--primary)", fontSize: "32px" }}>
              per 159g
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
            5<span style={{ color: "var(--primary)" }}>g</span>
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
            7<span style={{ color: "var(--primary)" }}>g</span>
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
            15
            <span style={{ color: "var(--primary)" }}>g</span>
          </h4>
        </React.Fragment>
      }
    />
    <div className="d-flex flex-column justify-content-end mt-4">
      <TextButton to="/nutrition/search?q=greek+salad">VIEW RECIPE</TextButton>
      <TextButton to="/nutrition/search?q=greek+salad">
        I ATE THIS TODAY
      </TextButton>
      <TextButton to="/nutrition/search?q=greek+salad">
        ORDER SIMILAR ITEMS ONLINE
      </TextButton>
    </div>
  </React.Fragment>
);

class Nutrition extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-start align-items-start mt-4 w-100">
        <h1
          className="display-4"
          style={{ fontSize: window.innerWidth < 576 ? "48px" : "48" }}
        >
          Your nutrition summary
        </h1>
        <NutritionSummary />
        <p className="lead mt-4" style={{ fontSize: "32px" }}>
          Suggested meals
        </p>
        <Table>
          <TableRow
            title="CAESAR SALAD"
            description="Tomatoes, sliced cucumbers, onion, feta cheese, olives"
          >
            <ExampleContent />
          </TableRow>
          <TableRow
            title="CHICKEN SANDWICH"
            description="Avocado, tomatoes, chicken"
          >
            <ExampleContent />
          </TableRow>
          <TableRow
            title="LIGHTER BEEF TACOS"
            description="Corn tortillas, ground beef, onion, tomatoes, salsa"
          >
            <ExampleContent />
          </TableRow>
        </Table>
      </div>
    );
  }
}

export default Nutrition;
