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
    }
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleSelectChange = (selectedOption) => {
    this.setState({
                    selectedOption,
                    userNameInput: ""
                  });
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

    checkForFormErrors(name, weight) {
      let error = false;
      if (weight == "") {
        this.setState({ error: <ul><li>weight cant be blank</li></ul> });
        error = true;
      }
      if (name == "" && this.state.selectedOption == null) {
        this.setState({ error: <ul><li>name cant be blank</li></ul> });
        error = true;
      }
       return error;
    }

    getSelectOptions() {
      let options = [];
      for(var i=0; i < this.props.peopleData.length; i++) {
          if (this.props.peopleData[i].id != null) {
            let option = { id: this.props.peopleData[i].id, label: this.props.peopleData[i].name }
            options.push(option);
          }
      }
      return options;
    }


  addToWeights(name, weight, date){
    debugger

      if (this.checkForFormErrors(name, weight) == false) {
        var currentDate = Math.round(date.getTime() / 1000) * 1000;
        var d = new Date(currentDate);
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        var currentDate = d.setMilliseconds(0);

        if (this.state.selectedOption != null) {
          this.props.saveWeight({ pounds: weight, currentDate: currentDate.toString(), person_id: this.state.selectedOption.id });
        } else {
          this.props.savePerson({ name: name, weights_attributes: [{ pounds: weight, currentDate: currentDate.toString() }] });
       }
       this.setState({ error: "" });
    }

  }


  render() {

    let options = this.getSelectOptions();

    const { selectedOption } = this.state;

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
          {this.state.error}
         <Chart />

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
