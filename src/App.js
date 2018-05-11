import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import './bootstrap.css';

import Home from './App/containers/Home';

import Header from './App/components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Home} />
          <Route path="/game" component={Home} />
          <Route path="/ladder" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
