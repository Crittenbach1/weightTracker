import React, { Component } from 'react';
import {connect} from "react-redux";

var CanvasJSReact = require('../canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {

  componentWillReceiveProps(nextProps) {
    debugger

    if ( nextProps.newPerson.length ==  0 ) {
      this.setState({ data: nextProps.peopleData });
    }
    if ( nextProps.newPerson.length > 0 ) {

      debugger

      let newPerson = { name: nextProps.newPerson[0].name,
                     type: "line",
                     xValueType: "dateTime",
                     toolTipContent: "{x}: {y}lb",
                     dataPoints: [{ x: parseInt(nextProps.newPerson[0].weights[0].x),
                                   y: parseInt(nextProps.newPerson[0].weights[0].y) }] }
          debugger
      this.setState({ data: [...this.state.data, newPerson] });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

  }

  render() {
     debugger
    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Weight Tracker"
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
	    	data: this.state.data
      }
     /*
     data: [
     {
       type: "line",
       xValueType: "dateTime",
       toolTipContent: "{x}: {y}lb",
       dataPoints: [
       { x: 10, y: 21 },
       { x: 20, y: 25},
       { x: 30, y: 20 },
       { x: 40, y: 25 },
       { x: 50, y: 27 },
       { x: 60, y: 28 },
       { x: 70, y: 28 },
       { x: 80, y: 24 },
       { x: 90, y: 26}

       ]
     },
       {
       type: "line",
       xValueType: "dateTime",
       toolTipContent: "{x}: {y}lb",
       dataPoints: [
       { x: 10, y: 31 },
       { x: 20, y: 35},
       { x: 30, y: 30 },
       { x: 40, y: 35 },
       { x: 50, y: 35 },
       { x: 60, y: 38 },
       { x: 70, y: 38 },
       { x: 80, y: 34 },
       { x: 90, y: 44}

       ]
     },
       {
       type: "line",
       xValueType: "dateTime",
       toolTipContent: "{x}: {y}lb",
       dataPoints: [
       { x: 10, y: 45 },
       { x: 20, y: 50},
       { x: 30, y: 40 },
       { x: 40, y: 45 },
       { x: 50, y: 45 },
       { x: 60, y: 48 },
       { x: 70, y: 43 },
       { x: 80, y: 41 },
       { x: 90, y: 28}

       ]
     },
       {
       type: "line",
       xValueType: "dateTime",
       toolTipContent: "{x}: {y}lb",
       dataPoints: [
       { x: 10, y: 71 },
       { x: 20, y: 55},
       { x: 30, y: 50 },
       { x: 40, y: 65 },
       { x: 50, y: 95 },
       { x: 60, y: 68 },
       { x: 70, y: 28 },
       { x: 80, y: 34 },
       { x: 90, y: 14}

       ]
     }
     ]
     */



    return (
      <div className="chart" style={{height: 200 + "px", width: 100 + "%"}}>
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
