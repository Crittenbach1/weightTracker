export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_WEIGHTS':
      return action.payload
    case 'SAVE_WEIGHT':
      debugger
      return action.payload
    default:
      return state;
  }
}
