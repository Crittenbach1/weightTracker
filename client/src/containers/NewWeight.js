import React, { Component } from 'react';
import {connect} from "react-redux";
import Chart from '../components/Chart.jsx';
import PersonForm from '../components/PersonForm.js';
import { savePerson } from '../actions/savePersonAction.js'
import { saveWeight } from '../actions/saveWeightAction.js'
import DatePicker from "react-datepicker";
import Select from 'react-select';
import $ from "jquery";

import "react-datepicker/dist/react-datepicker.css";

class NewPerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(),
      numOfWeights: 0,
      weights: [],
      people: [{id: 1}],
      chartData: [],
      saveData: false,
      error: ""
    }
    this.addPerson = this.addPerson.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAddWeight = this.handleAddWeight.bind(this);

  }


  handleDateChange(input) {
    this.setState({
      startDate: input
    });
  }

  handleAddWeight = () => {
    this.setState({ numOfWeights: this.state.weights.length });
    let weights = this.state.weights;
    var date = new Date(this.state.startDate);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    var ms = date.setMilliseconds(0);
    debugger
    let taken = this.state.weights.filter(function(w){ return w.currentDate === date.toString() });
    if (taken.length != 0) {
      this.setState({ error: "selected date is taken"})
    } else {
      weights.push({ id: this.state.weights.length + 1,
                     currentDate: date.toString(),
                     pounds: '',
                     ms: ms
                   })
      this.setState({ weights: weights,
                      error: ''
                    })
    }
  }

  handleRemoveWeight = () => {
    debugger
    let weights = this.state.weights;
    weights.pop();
    this.setState({ weights: weights });
  }

  addPerson = () => {
    this.setState({ people: this.state.people.concat([{ id: this.state.people.length + 1 }]) });
  }

  removePerson = () => {
    let people = this.state.people;
    people.pop();
    this.setState({ people: people });
  }

  chartPeople = (data) => {
    debugger
    let chartData = this.state.chartData;
    let dataPoints = [];
    for(let i=0; data.weights.length > i; i++) {
      let w = { x: data.weights[i].ms,
                y: parseInt(data.weights[i].pounds) };
      dataPoints.push(w);
    }
    let person = { name: data.name,
                   type: "line",
                   xValueType: "dateTime",
                   toolTipContent: "{x}: {y}lb",
                   dataPoints: dataPoints }
    chartData.push(person);
    this.setState({ chartData: chartData });
    if (this.state.chartData.length == this.state.people.length) {
      this.setState({ saveData: false });
    }
  }

  saveData = () => {
   this.setState({ saveData: !this.state.saveData,
                   chartData: []
                 });
 }

  render() {
    debugger
    return (
      <div>
        {this.state.error}
        <button type="button" onClick={this.addPerson} className="small">Add Person</button>
        <button type="button" onClick={this.removePerson} className="small">Remove Person</button>
        <button type="button" onClick={this.saveData} className="small">Chart Data</button>
        Enter date:
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleDateChange}
         />

        <button type="button" onClick={this.handleAddWeight} className="small">Add Weight</button>
        <button type="button" onClick={this.handleRemoveWeight} className="small">Remove Weight</button>
        {this.state.people.map(person=><PersonForm
                                        key={person.id}
                                        weights={this.state.weights}
                                        currentDate={this.state.startDate.toString()}
                                        chartPeople={this.chartPeople.bind(this)}
                                        saveData={this.state.saveData}
                                        />)}

        <Chart people={this.state.chartData} />
      </div>
    )
  }
}

function mapStateToProps(state) {
   return {
     peopleData: state.fetchPeople
   }
}

export default connect(mapStateToProps, {savePerson, saveWeight})(NewPerson);
