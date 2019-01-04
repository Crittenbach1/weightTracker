import React, { Component } from 'react';
import {connect} from "react-redux";
import Chart from '../components/Chart.jsx';
import { saveWeight } from '../actions/saveWeightAction.js'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class NewWeight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      startDate: new Date(),
      newWeight: [],
      lastDay: [0,0]
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(input) {
    debugger
    this.setState({
      startDate: input
    });
  }


  changeUserInput(input){
      this.setState({
        userInput: input
      });
   }

  addToWeights(input, date){
    debugger
    var currentDate = Math.round(date.getTime() / 1000) * 1000;
    if (currentDate <= this.state.lastDay[0]) {
      alert("enter a date past " + this.state.lastDay[1]);
    } else {
      this.props.saveWeight({ pounds: input, currentDate: currentDate.toString() });

      let newWeight = {x: currentDate, y: parseInt(input)};

      this.setState({
        newWeight: [newWeight],
        lastDay: [currentDate, date]
      })
   }
  }


  render() {

    return (
      <div style={{height: 200 + "px", width: 100 + "%"}}>
        Enter weight:
        <input
         onChange={ (e)=>this.changeUserInput(e.target.value) }
           value={this.state.userInput}
           type="text"
         />
         Enter date:
         <DatePicker
           selected={this.state.startDate}
           onChange={this.handleChange}
          />
         <button onClick={ ()=> this.addToWeights(this.state.userInput, this.state.startDate) }>Submit</button>
         <Chart info={this.state.newWeight} />

      </div>
    )
  }
}


export default connect(null, {saveWeight})(NewWeight);
