export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PEOPLE':
      return action.payload
    case 'SAVE_PERSON':
        return action.payload
    case 'SAVE_WEIGHT':
        return action.payload
    default:
      return state;
  }
}
