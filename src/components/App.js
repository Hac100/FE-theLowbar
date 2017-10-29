import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <div
            className="navbar"
            role="navigation"
            aria-label="main navigation"
            navbar-background-color="black"
          >
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img
                  src="https://i.imgur.com/mVSXaAM.png"
                  alt="Bulma: a modern CSS framework based on Flexbox"
                  width="112"
                  height="28"
                />
              </a>

              <Link className="navbar-item" to="/">
                Home
              </Link>
              <button className="button navbar-burger">
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <Route exact path="/" component={Home} />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
