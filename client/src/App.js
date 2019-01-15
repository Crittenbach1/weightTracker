import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NewChartData from './containers/NewChartData.js';
import { fetchCharts } from './actions/fetchChartsAction.js'
import 'typeface-roboto';
import './App.css';


class App extends Component {

 componentDidMount() {
   this.props.fetchCharts();
 }

  render() {

    return (
      <div className="App">
         <NewChartData className="newChartData" />
      </div>
    );
  }
}


export default connect(null, {fetchCharts})(App);
