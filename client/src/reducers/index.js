import { combineReducers } from 'redux';

import fetchPeople from './fetchPeopleReducer.js';
//import savePerson from './savePersonReducer.js';

export default combineReducers({
   fetchPeople,
});
