import fetch from 'isomorphic-fetch';

export function fetchWeights() {

  return function(dispatch){
    dispatch({type: 'LOADING'})
    var url = 'http://localhost:3001/api/v1/weights.json';
    var req = new Request(url);
    return fetch(req)
    .then(function(response) {
      return response.json()
    })
     .then(function(weights) {
        dispatch({type: 'FETCH_WEIGHTS', payload: weights})
    })
  }
}
