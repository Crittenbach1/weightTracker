import React, { Component } from 'react';
import {connect} from "react-redux";
import Chart from '../components/Chart.jsx';
import { savePerson } from '../actions/savePersonAction.js'
import { saveWeight } from '../actions/saveWeightAction.js'
import DatePicker from "react-datepicker";
import Select from 'react-select';

import "react-datepicker/dist/react-datepicker.css";

class NewPerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userNameInput: '',
      userWeightInput: '',
      selectedOption: null,
      startDate: new Date(),
      error: ""
    //  newPerson: [],
    //  newWeight: [],
    //  lastDay: [0,0]
    }
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }


  handleDateChange(input) {
    this.setState({
      startDate: input
    });
  }

  changeUserNameInput(input){
      this.setState({
        selectedOption: null,
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
    if (this.state.selectedOption != null) {
      debugger
      this.props.saveWeight({ pounds: weight, currentDate: currentDate.toString(), person_id: this.state.selectedOption.id });
      /*
      let newWeight = { pounds: weight, currentDate: currentDate, person_id: this.state.selectedOption.id };
      this.setState({
        newWeight: [newWeight],
        newPerson: []
      })
      */
    } else {
      this.props.savePerson({ name: name, weights_attributes: [{ pounds: weight, currentDate: currentDate.toString() }] });
  /*    let newPerson = { name: name, type: "line", weights: [{x: currentDate, y: parseInt(weight)}] };

      this.setState({
        newPerson: [newPerson],
        newWeight: []
      }) */
   }

  }


  render() {
    debugger
    let options = [];
    let error = false;
    for(var i=0; i < this.props.peopleData.length; i++) {
        if (this.props.peopleData[i].id != null) {
          let option = { id: this.props.peopleData[i].id, label: this.props.peopleData[i].name }
          options.push(option);
        }
    }

    debugger
    const { selectedOption } = this.state;

    return (
      <div style={{height: 200 + "px", width: 100 + "%"}}>
        <h1>{this.state.error}</h1>
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
          <Select
           value={selectedOption}
           onChange={this.handleSelectChange}
           options={options}
         />
         Enter date:
         <DatePicker
           selected={this.state.startDate}
           onChange={this.handleDateChange}
          />
         <button onClick={ ()=> this.addToWeights(
                                this.state.userNameInput,
                                this.state.userWeightInput,
                                this.state.startDate)
          }>Submit</button>
         <Chart newWeight={this.state.newWeight} newPerson={this.state.newPerson}/>

      </div>
    )
  }
}

function mapStateToProps(state) {
    debugger
  /* if (state.fetchPersons.length > 0) {
     var lastDay = state.fetchPersons[state.fetchPersons.length - 1].x;
   } else {
     var lastDay = 0;
   }
   */

   return {
     peopleData: state.fetchPeople,
     newPerson: state.savePerson
   }
}

export default connect(mapStateToProps, {savePerson, saveWeight})(NewPerson);
