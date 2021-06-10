import React, { Component } from "react";
import { NavLink, Switch, Link, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Test from "./pages/Test";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item active" href="./about.html">
                About
              </a>
              <a className="list-group-item" href="./home.html">
                Home
              </a> */}
              {/* <Link className="list-group-item" to="/about">
                  About
                </Link>
                <Link className="list-group-item" to="/home">
                  Home
                </Link> */}
              {/* <NavLink activeClassName="chris" className="list-group-item" to="/about">
                  About
                </NavLink>
                <NavLink activeClassName="chris" className="list-group-item" to="/home">
                  Home
                </NavLink> */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Route path="/home" component={Test} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
