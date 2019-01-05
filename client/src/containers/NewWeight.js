import React, { Component } from 'react';
import {connect} from "react-redux";
import Chart from '../components/Chart.jsx';
import { savePerson } from '../actions/savePersonAction.js'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class NewPerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userNameInput: '',
      userWeightInput: '',
      startDate: new Date(),
      newPerson: [],
      lastDay: [0,0]
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(input) {
    this.setState({
      startDate: input
    });
  }

  changeUserNameInput(input){
      this.setState({
        userNameInput: input
      });
   }

   changeUserWeightInput(input){
       this.setState({
         userWeightInput: input
       });
    }

  addToWeights(name, weight, date){
    debugger

    var currentDate = Math.round(date.getTime() / 1000) * 1000;
    if (currentDate <= this.props.lastDay || currentDate <= this.state.lastDay[0]) {
      alert("date is too low");
    } else {
      this.props.savePerson({ name: name, weights_attributes: [{ pounds: weight, currentDate: currentDate.toString() }] });

      let newPerson = { name: name, weight :{x: currentDate, y: parseInt(weight)} };

      this.setState({
        newPerson: [newPerson],
        lastDay: [currentDate, date]
      })
   }

  }


  render() {

    return (
      <div style={{height: 200 + "px", width: 100 + "%"}}>
        Enter Name:
        <input
         onChange={ (e)=>this.changeUserNameInput(e.target.value) }
           value={this.state.userNameInput}
           type="text"
         />
         Enter Weight:
         <input
          onChange={ (e)=>this.changeUserWeightInput(e.target.value) }
            value={this.state.userWeightInput}
            type="text"
          />
         Enter date:
         <DatePicker
           selected={this.state.startDate}
           onChange={this.handleChange}
          />
         <button onClick={ ()=> this.addToWeights(
                                this.state.userNameInput,
                                this.state.userWeightInput,
                                this.state.startDate)
          }>Submit</button>
         <Chart info={this.state.newPerson} />

      </div>
    )
  }
}

/*function mapStateToProps(state) {

   if (state.fetchPersons.length > 0) {
     var lastDay = state.fetchPersons[state.fetchPersons.length - 1].x;
   } else {
     var lastDay = 0;
   }

   return {
    lastDay: lastDay
   }
}
*/
export default connect(null, {savePerson})(NewPerson);
