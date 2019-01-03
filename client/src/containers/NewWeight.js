import React, { Component } from 'react';
import {connect} from "react-redux";
import Chart from '../components/Chart.jsx';
import { saveWeight } from '../actions/saveWeightAction.js'

class NewWeight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      newWeight: [],
    }
  }

  changeUserInput(input){
      this.setState({
        userInput: input
      });
   }

  addToWeights(input){
    debugger
    var currentDate = Math.round((new Date()).getTime() / 1000) * 1000;
    this.props.saveWeight({ pounds: input, currentDate: currentDate.toString() });

    let newWeight = {x: currentDate, y: parseInt(input)};

    this.setState({
      newWeight: [newWeight],
    })
  }



  render() {

    return (
      <div style={{height: 200 + "px", width: 100 + "%"}}>
        <input
         onChange={ (e)=>this.changeUserInput(e.target.value) }
           value={this.state.userInput}
           type="text"
         />
         <button onClick={ ()=> this.addToWeights(this.state.userInput) }>Submit</button>
         <Chart info={this.state.newWeight} />

      </div>
    )
  }
}


export default connect(null, {saveWeight})(NewWeight);
