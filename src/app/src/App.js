import React from "react";
import Grid from "./components/Grids/Grid";
import { withRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { AppContainer, RouteContainer } from "./styles/appStyles";
import Events from "./components/Events/Events";
import Presentation from "./components/Presentation/Presentation";
import Agenda from "./components/Agenda/Agenda";
import Map from "./components/Map/Map";
import { PoseGroup } from "react-pose";

function App() {
  return (
    <AppContainer>
      <Route
        render={({ location }) => (
          <>
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/grid" component={Grid} />
                  <Route exact path="/icon-grid" component={Grid} />
                  <Route exact path="/events" component={Events} />
                  <Route exact path="/presentation" component={Presentation} />
                  <Route exact path="/agenda" component={Agenda} />
                  <Route exact path="/map" component={Map} />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          </>
        )}
      />
    </AppContainer>
  );
}

export default withRouter(App);
