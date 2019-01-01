import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { fetchWeights } from './actions/fetchWeightsAction.js'
import DisplayWeights from './containers/DisplayWeights.js'
import NewWeight from './containers/NewWeight.js'
import Chart from './components/Chart.jsx';
import './App.css';

class App extends Component {

  componentWillMount() {
   this.props.fetchWeights()
  }


  render() {
    debugger
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Weight Tracker</h1>
          <DisplayWeights weights={this.props.weights} />
          <NewWeight />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    debugger
    return {weights: state.fetchWeights}
}

export default connect(mapStateToProps, {fetchWeights})(App);
