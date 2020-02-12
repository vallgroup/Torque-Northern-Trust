import React from "react";
import IconGrids from "./components/IconGrids/IconGrids";
import PortraitGrids from "./components/PortraitGrids/PortraitGrids";
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

                  <Route exact path="/portrait-grid/:slug" component={PortraitGrids} />
                  <Route exact path="/icon-grid/:slug" component={IconGrids} />
                  <Route exact path="/event/:slug" component={Events} />
                  <Route exact path="/events" component={Events} />

                  <Route exact path="/presentation" component={Presentation} />
                  <Route exact path="/agenda" component={Agenda} />
                  <Route exact path="/torque-map/:slug" component={Map} />
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
