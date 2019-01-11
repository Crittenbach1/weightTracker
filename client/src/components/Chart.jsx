import React, { Component } from 'react';
import {connect} from "react-redux";

var CanvasJSReact = require('../canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {

  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.people.length > 0) {
      let orderedPeople = this.orderPeople(nextProps.people);
      this.setState({ data: orderedPeople })
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: ''
    }
  }

  orderPeople(people) {
      function compare(a,b) {
         if (a.x < b.x) return -1;
         if (a.x > b.x) return 1;
         return 0;
       }

       for (let i = 0; i < people.length; i++) {
             let weights = [];
             for (let j = 0; j < people[i].dataPoints.length; j++) {
                  weights.push(people[i].dataPoints[j]);
             }
             people[i].dataPoints = weights.sort(compare);
        }
         return people;
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
      <div className="chart" style={{height: 200 + "px", width: 840 + "px"}}>
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
