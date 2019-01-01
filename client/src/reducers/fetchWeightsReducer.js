export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_WEIGHTS':
      return action.payload
    case 'SAVE_WEIGHT':
       let weight = state.map(w => w);
       weight.push(action.payload)
       return weight;
    default:
      return state;
  }
}
