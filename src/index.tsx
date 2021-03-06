import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import Log from "./Log";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/log" exact component={Log} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
