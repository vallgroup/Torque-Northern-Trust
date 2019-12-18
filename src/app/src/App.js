import React from "react";
import Grid from "./components/PortraitGrids/Grid";
import { withRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { AppContainer } from "./styles/appStyles";
import EventsPage from "./components/Events/EventsPage";

function App(props) {
  return (
    <AppContainer>
      <Switch>
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
        <Route exact path="/events" render={props => <EventsPage />} />
      </Switch>
    </AppContainer>
  );
}

export default withRouter(App);
