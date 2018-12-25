import React, { Component } from 'react';
import { connect } from 'react-redux';
import Weight from '../components/Weight.js';

import '../App.css';

class displayWeights extends Component {


 render() {
  return (
    <div>

    </div>
  );
 }
}

const mapStateToProps = (state) => {
  return {weights: state.fetchWeights}
}

export default connect(mapStateToProps, {})(displayWeights);
