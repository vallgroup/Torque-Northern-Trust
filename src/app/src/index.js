import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/index";
import { ThemeProvider } from "styled-components";
import * as theme from "./theme";
alert('hello')

const entry = document.querySelectorAll("#northern-trust-tv-app-entry");

entry.forEach(entry => {
  if (entry) {
    // pass through the data-site attr as props so the app knows where to send requests
    ReactDOM.render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>,
      entry
    );
  }
});
