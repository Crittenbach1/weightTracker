import React, { Component } from 'react';
import {connect} from "react-redux";

var CanvasJSReact = require('../canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {

  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.people.length > 0) {
      this.setState({ data: nextProps.people })
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: ''
    }

  }



  render() {
     debugger
    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
		//	title:{
		//		text: "Weight Tracker"
		//	},
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
	    	data: this.state.data
      }

    return (
      <div className="chart" style={{height: 200 + "px", width: 100 + "%"}}>
        {this.state.error}

        <CanvasJSChart options={options} />
      </div>
    );
  }

}

function mapStateToProps(state) {
  debugger

   return {
     peopleData: state.fetchPeople,
   }
}

export default connect(mapStateToProps)(Chart);
