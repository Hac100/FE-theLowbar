import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className="section">
          <nav className="navbar" aria-label="main navigation">
            <div className="">
              <Link className="navbar-item" to="/">
                Home
              </Link>
            </div>
          </nav>

          <div className="container">
            <Route exact path="/" component={Home} />
          </div>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
