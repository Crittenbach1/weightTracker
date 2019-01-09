export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PEOPLE':
      return action.payload
    case 'SAVE_PERSON':
        debugger

        let newPerson = { name: action.payload.name,
                       id: action.payload.id,
                       type: "line",
                       xValueType: "dateTime",
                       toolTipContent: "{x}: {y}lb",
                       dataPoints: [{ x: parseInt(action.payload.weights[0].currentDate),
                                     y: parseInt(action.payload.weights[0].pounds) }] }
        return [...state, newPerson]
    case 'SAVE_WEIGHT':
        debugger
        function compare(a,b) {
           if (a.x < b.x)
             return -1;
           if (a.x > b.x)
             return 1;
           return 0;
         }

        let newWeight = {x: parseInt(action.payload[0].currentDate), y: parseInt(action.payload[0].pounds)}
        let personToUpdate = [];
        let people = state;
        for (let i = 0; i < people.length; i++) {
          if (people[i].id == action.payload[0].person_id) {
              debugger
              let weights = [];
              for (let j = 0; j < people[i].dataPoints.length; j++) {
                if (people[i].dataPoints[j].x != action.payload[0].currentDate) {
                   weights.push(people[i].dataPoints[j]);
                }
              }
              people[i].dataPoints = weights;
              people[i].dataPoints.push(newWeight);

              people[i].dataPoints = people[i].dataPoints.sort(compare);
              personToUpdate = people[i];
          }
        }

        let newPeople = people.map( function(p) {
           if(p.id == action.payload.person_id) {
             return personToUpdate
             } else {
             return p
           }
         })

        debugger
        return newPeople

    default:
      return state;
  }
}
