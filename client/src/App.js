import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NewChartData from './containers/NewChartData.js';
import { fetchCharts } from './actions/fetchChartsAction.js'
import { withStyles } from '@material-ui/core/styles';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

import 'typeface-roboto';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
});

class App extends Component {

 componentDidMount() {
   this.props.fetchCharts();
 }

  render() {

    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
         <NewChartData className="newChartData" />
      </div>
      </MuiThemeProvider>
    );
  }
}


export default connect(null, {fetchCharts})(App);
