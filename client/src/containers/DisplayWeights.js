import React, { Component } from 'react';
import { connect } from 'react-redux';
import Weight from '../components/Weight.js';
import Chart from '../components/Chart';

import '../App.css';

class displayWeights extends Component {

  constructor(props) {
   super(props);
   this.state = {weights: this.props.weights};
  }

 render() {
  let chart;
    if(this.props.weights.length > 0) {
        var pounds = this.props.weights.map(w => parseInt(w.pounds));
        var dates = this.props.weights.map(w => w.id + "/2018");
        alert("Hello");
        chart = <Chart dates={dates} pounds={pounds} />
    } else {
        chart = null
    }
    return (
        <div className="chart" style={{height: 200 + "px", width: 100 + "%"}}>
            {chart}
        </div>
    )
 }
}


export default displayWeights;
