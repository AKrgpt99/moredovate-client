import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// TODO: Redux setup

import Layout from "./components/Layout";
import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Workout from "./pages/workout";
import WorkoutStart from "./pages/workoutStart";
import WorkoutAdd from "./pages/workoutAdd";
import Nutrition from "./pages/nutrition";
import Charts from "./pages/charts";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup">
            <Redirect exact from="/signup" to="/signup/1" />
          </Route>
          <Route exact path="/signup/:step" component={Signup} />
          <Route exact path="/workout" component={Workout} />
          <Route exact path="/workout/start" component={WorkoutStart} />
          <Route exact path="/workout/add" component={WorkoutAdd} />
          <Route exact path="/nutrition" component={Nutrition} />
          <Route exact path="/charts" component={Charts} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
