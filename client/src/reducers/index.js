import { combineReducers } from 'redux';

import fetchPeople from './fetchPeopleReducer.js';

export default combineReducers({
   fetchPeople,
});
