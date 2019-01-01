import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveWeight } from '../actions/saveWeightAction.js'

import '../App.css';

class newWeight extends Component {

  constructor(props) {
   super(props);
   this.state = {pounds: ''};

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   this.setState({pounds: event.target.value});
 }

 handleSubmit(event) {
   alert('A name was submitted: ' + this.state.pounds);
   var weight = {pounds: this.state.pounds};
   this.props.saveWeight(weight);

   event.preventDefault();
 }


 render() {
  return (
    <div>
      <p>Enter Current Weight:</p>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
 }
}

export default connect(null, {saveWeight})(newWeight);
