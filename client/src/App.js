import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NewWeight from './containers/NewWeight.js';
import { fetchWeights } from './actions/fetchWeightsAction.js'
import './App.css';


class App extends Component {

 componentDidMount() {
   this.props.fetchWeights();
 }

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


export default connect(null, {fetchWeights})(App);
