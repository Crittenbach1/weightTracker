import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NewChartData from './containers/NewChartData.js';
import { fetchPeople } from './actions/fetchPeopleAction.js'
import 'typeface-roboto';
import './App.css';


class App extends Component {

 componentDidMount() {
   this.props.fetchPeople();
 }

  render() {

    return (
      <div className="App">


        <NewChartData />

        <header className="App-header">

        </header>

      </div>
    );
  }
}


export default connect(null, {fetchPeople})(App);
