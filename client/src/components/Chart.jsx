import React, { Component } from 'react';
import {connect} from "react-redux";

var CanvasJSReact = require('../canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {

  componentWillReceiveProps(nextProps) {
    if ( nextProps.info.length == 0 ) {
      this.setState({ data: nextProps.weightData });
    } else {
      this.setState({ data: [...this.state.data, ...nextProps.info] });
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

  }

  render() {

    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Weights"
			},
			axisY: {
				title: "Weight",
				includeZero: false,
				suffix: "lb"
			},
			axisX: {
				title: "Date",
				prefix: "",
				interval: 2
			},
			data: [{
				type: "line",
        xValueType: "dateTime",
				toolTipContent: "{x}: {y}lb",
				dataPoints: this.state.data,
			}]
		}

    return (
      <div className="chart" style={{height: 200 + "px", width: 100 + "%"}}>
        <CanvasJSChart options = {options}
          /* onRef={ref => this.chart = ref} */
        />
        <ul>
         {this.state.data.map(val=> <li>{val.x}</li>)}
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  debugger

   return {
    weightData: state.fetchWeights
   }
}

export default connect(mapStateToProps)(Chart);
