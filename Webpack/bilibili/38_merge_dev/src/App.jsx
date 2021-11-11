import React, { Component } from "react";
import { HashRouter, Routes, Link, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "front end 1",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <HashRouter>
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
