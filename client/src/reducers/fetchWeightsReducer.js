export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_WEIGHTS':
      debugger
      return action.payload
    default:
      return state;
  }
}
