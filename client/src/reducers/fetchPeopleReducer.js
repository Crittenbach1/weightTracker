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
        return action.payload
    default:
      return state;
  }
}
