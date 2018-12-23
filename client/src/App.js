import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NewWeight from './containers/NewWeight.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Weight Tracker</h1>
          <NewWeight />
        </header>
      </div>
    );
  }
}

export default App;
