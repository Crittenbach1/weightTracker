import { combineReducers } from 'redux';

import fetchCharts from './fetchChartsReducer.js';
import addChart from './fetchChartsReducer.js';

export default combineReducers({
   fetchCharts,
   addChart
});
