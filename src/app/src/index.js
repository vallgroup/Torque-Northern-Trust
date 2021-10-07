import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./App";
import Spectra from 'spectra'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/index";
import { ThemeProvider } from "styled-components";
import * as theme from "./theme";


import {firebaseInit} from 'fb'

const firebaseConfig = {
  apiKey: "AIzaSyCKYuQ67c3vrzNRREFqxFgTLg8ZkxIMq2Y",
  authDomain: "nt-tv-app.firebaseapp.com",
  databaseURL: "https://nt-tv-app.firebaseio.com",
  projectId: "nt-tv-app",
  storageBucket: "nt-tv-app.appspot.com",
  messagingSenderId: "46494947968",
  appId: "1:46494947968:web:f8eb51b8eead329ced2465",
  measurementId: "G-6D6VS6Q65G"
};

firebaseInit(firebaseConfig)

ReactDOM.render(
  <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
  </Provider>,
  document.getElementById("northern-trust-tv-app-entry")
);
