import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";

export default function Routes() {
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Register} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
    </BrowserRouter>
}