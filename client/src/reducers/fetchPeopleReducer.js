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
        let newWeight = {x: parseInt(action.payload.currentDate), y: parseInt(action.payload.pounds)}
        let personToUpdate = [];
        let people = state;
        for (let i = 0; i < people.length; i++) {
          if (people[i].id == action.payload.person_id) {
              people[i].dataPoints.push(newWeight);
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
