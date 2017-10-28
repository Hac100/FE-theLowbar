import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import './App.css';

import Home from './Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className=" section">
          <nav className="navbar" aria-label="main navigation">
            <div className="navbar-brand">
              <Link className='navbar-item' to='/'>Home</Link>
            </div>
          </nav>

          <div className='App container'>
            <Switch>

              <Route exact path='/' component={Home} />

            </Switch>
          </div>
        </section>
      </BrowserRouter>
    );
  }

}

export default App;
