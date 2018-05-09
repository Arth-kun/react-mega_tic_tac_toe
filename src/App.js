import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import './bootstrap.css';
import Game from './App/components/Game';
import Header from './App/components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Game} />
          <Route path="/profile" component={Game} />
          <Route path="/game" component={Game} />
          <Route path="/ladder" component={Game} />
        </div>
      </Router>
    );
  }
}

export default App;
