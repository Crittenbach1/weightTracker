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
             function compare(a,b) {
                if (a.x < b.x)
                  return -1;
                if (a.x > b.x)
                  return 1;
                return 0;
              }

             let chartPeople = [];
             for(let i = 0; i < people.length; i++) {
                let weights = [];

                 for(let j = 0; j < people[i].weights.length; j++) {
                    let dataPoints = { x: parseInt(people[i].weights[j].currentDate),
                                       y: parseInt(people[i].weights[j].pounds) };
                     weights.push(dataPoints);
                 }

                  weights = weights.sort(compare);
               let person = { name: people[i].name,
                              id: people[i].id,
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
