// Get all the component of the App and map the Routes
// In a larger App we could use a Router file instead
// Dont look to much at it
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// We get all the styles of the app from there
import './style/App.css';
import './style/bootstrap.css';

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
