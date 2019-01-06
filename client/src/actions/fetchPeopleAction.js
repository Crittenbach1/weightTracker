import fetch from 'isomorphic-fetch';

export function fetchPeople() {

  return function(dispatch){
    dispatch({type: 'LOADING'})
    var url = 'http://localhost:3001/api/v1/persons.json';
    var req = new Request(url);
    return fetch(req)
    .then(function(response) {
      return response.json()
    })
     .then(function(people) {
         let chartPeople = [];
         for(let i = 0; i < people.length; i++) {
            let weights = [];
             for(let j = 0; j < people[i].weights.length; j++) {
                debugger
                let dataPoints = { x: parseInt(people[i].weights[j].currentDate),
                                   y: parseInt(people[i].weights[j].pounds) };
                 weights.push(dataPoints);
             }
           let person = { name: people[i].name,
                          type: "line",
                          xValueType: "dateTime",
                          toolTipContent: "{x}: {y}lb",
                          dataPoints: weights }
            chartPeople.push(person);
       }

        dispatch({type: 'FETCH_PEOPLE', payload: chartPeople})
    })
  }
}
