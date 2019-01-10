import React, { Component } from 'react';

class PersonForm extends Component {


  componentWillReceiveProps(nextProps) {
    if (nextProps.saveData == true) {
      nextProps.chartPeople({ name: this.state.name, weights: this.state.weights });
    }
    if (nextProps.weights.length > this.state.weights.length) {
      let newWeight = nextProps.weights[nextProps.weights.length - 1];
      this.setState({ weights: this.state.weights.concat([newWeight]) });
    }

    if (nextProps.weights.length < this.state.weights.length) {
      let newWeights = this.state.weights;
      newWeights.pop();
      this.setState({ weights: newWeights });
    }


   }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      weights: this.props.weights,
      currentDate: this.props.currentDate
    }
  }

    handleNameChange = (input) => {
      this.setState({ name: input });
    }

    handleWeightPoundsChange = (idx) => (evt) => {
      const newWeights = this.state.weights.map((weight, widx) => {
        if (idx !== widx) return weight;
        return { ...weight, pounds: evt.target.value };
      });

      this.setState({ weights: newWeights });
    }


  render() {
    debugger
    return (
      <div>

      Enter Name:
      <input
       onChange={ (e)=>this.handleNameChange(e.target.value) }
         value={this.state.name}
         type="text"
       />

         <form onSubmit={this.handleSubmit}>
            {this.state.weights.map((weight, idx) => (
              <div className="weight">
                <input
                  type="text"
                  placeholder={`Weight #${idx + 1} pounds`}
                  value={weight.pounds}
                  onChange={this.handleWeightPoundsChange(idx)}
                />
                {weight.currentDate}
              </div>
            ))}
        </form>
       </div>
    );
  }
}

export default PersonForm;
