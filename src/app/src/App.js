import React from "react";
import "./App.css";
import Grid from "./components/PortraitGrids/Grid";
import { withRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App(props) {
  return (
    <div className="App">
      <Route exact path="/" render={props => <HomePage {...props} />} />
      <Route
        exact
        path="/grid"
        render={props => <Grid gridType="portrait" {...props} />}
      />
      <Route
        exact
        path="/icon-grid"
        render={props => <Grid gridType="icon" {...props} />}
      />
    </div>
  );
}

export default withRouter(App);