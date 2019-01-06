import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NewWeight from './containers/NewWeight.js';
import { fetchPeople } from './actions/fetchPeopleAction.js'
import './App.css';


class App extends Component {

 componentDidMount() {
   this.props.fetchPeople();
 }

  render() {

    return (
      <div className="App">
        <NewWeight />
        <header className="App-header">

        </header>
      </div>
    );
  }
}


export default connect(null, {fetchPeople})(App);
