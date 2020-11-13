import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./Login/Login.js";
import Register from "./Register/Register.js";
import Movement from "./Movement/Movement.js";
import Example from "./example.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/movement" component={Movement} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
