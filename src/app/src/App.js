import React from "react";
import Grid from "./components/Grids/Grid";
import { withRouter, Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { AppContainer } from "./styles/appStyles";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Presentation from "./components/Presentation/Presentation";
import Agenda from "./components/Agenda/Agenda";

function App(props) {
  const location = useLocation();
  return (
    <AppContainer>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
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
        <Route exact path="/events" render={() => <Events />} />
        <Route exact path="/presentation" render={() => <Presentation />} />
        <Route exact path="/agenda" render={() => <Agenda />} />
      </Switch>
      {location.pathname !== "/" && <Footer />}
    </AppContainer>
  );
}

export default withRouter(App);
