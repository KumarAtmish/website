import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}
