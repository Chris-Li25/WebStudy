import React, { Component } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import About from "@/components/About";
import Home from "@/components/Home";

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
        <BrowserRouter>
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
