import React, { Component } from 'react';
import Chart from '../components/Chart.jsx';

export default class NewWeight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      allWeights: [],
    }
  }

  changeUserInput(input){
      this.setState({
        userInput: input
      });
   }

  addToWeights(input){
    let weightsArray = this.state.allWeights;

    weightsArray.push({x: this.state.allWeights.length, y: parseInt(input)});

    this.setState({
      allWeights: weightsArray,
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
         <button className="btn1" onClick={ ()=> this.addToWeights(this.state.userInput) }>Submit</button>
         <Chart info={this.state.allWeights} />

      </div>
    )
  }
}
