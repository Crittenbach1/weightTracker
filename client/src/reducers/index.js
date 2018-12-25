import { combineReducers } from 'redux';
import saveWeight from './saveWeightReducer.js';
import fetchWeights from './fetchWeightsReducer.js';


export default combineReducers({
   saveWeight,
   fetchWeights
});
