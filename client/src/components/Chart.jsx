import React, { Component } from 'react';
import {connect} from "react-redux";
import { saveData } from '../actions/saveDataAction.js'
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import Select from 'react-select';

var CanvasJSReact = require('../canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class Chart extends Component {

  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.people.length > 0) {
      let orderedPeople = this.orderPeople(nextProps.people);
      this.setState({ data: orderedPeople });
      this.sendData(nextProps.savePeopleData);
    }

    if (nextProps.charts != this.state.savedCharts) {
      debugger
      this.setState({ savedCharts: nextProps.charts });
    }

  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: '',
      savedCharts: [],
      selectedOption: null,
    }
    this.sendData = this.sendData.bind(this);
  }

  handleSelectChange = (selectedOption) => {
    this.setState({
                    selectedOption,
                  });
    console.log(`Option selected:`, selectedOption);
  }

  getSelectOptions() {
    debugger
    let options = [];
    for(var i=0; i < this.state.savedCharts.length; i++) {
        if (this.state.savedCharts[i].id != null) {
          let option = { id: this.state.savedCharts[i].id, label: this.state.savedCharts[i].date }
          options.push(option);
        }
    }
    return options;
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

    sendData(data){
      debugger
      let people = [];

      for (let i=0; data.length > i; i++) {
        let person = { name: data[i].name, weights_attributes: [] };
         let person_weights = [];
        for (let j=0; data[i].weights.length > j; j++) {
             let weight = { pounds: data[i].weights[j].pounds,
                           currentDate: data[i].weights[j].ms.toString() }
             person_weights.push(weight)
        }
        person.weights_attributes = person_weights;
        people.push(person);
      }
      debugger

      let newDate = new Date();

      this.props.saveData({ date: newDate.toString(), people_attributes: people });

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
      legend: {
          cursor: "pointer",
          itemclick: function (e) {
              //console.log("legend click: " + e.dataPointIndex);
              //console.log(e);
              if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                  e.dataSeries.visible = false;
              } else {
                  e.dataSeries.visible = true;
              }

              e.chart.render();
          }
      },
	    	data: this.state.data
      }

      let chartOptions = this.getSelectOptions();

      const { selectedOption } = this.state;

    return (
      <div className="chart" style={{height: 200 + "px", width: 840 + "px"}}>
        {this.state.error}

        <CanvasJSChart options={options} />

        <Select
          value={selectedOption}
          onChange={this.handleSelectChange}
          options={chartOptions}
        />

      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger

   return {
     charts: state.fetchCharts,
   }
}

export default connect(mapStateToProps, {saveData})(Chart);
