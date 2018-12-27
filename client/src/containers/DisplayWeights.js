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
   debugger

  let chart;
    if(this.props.weights.length > 0) {
        var pounds = this.props.weights.map(w => parseInt(w.pounds));
        var dates = this.props.weights.map(w => w.id + "/2018");
        chart = <Chart dates={dates} pounds={pounds} />
    } else {
        chart = null
    }
    return (
        <div>
            {chart}
        </div>
    )
 }
}



export default displayWeights;
