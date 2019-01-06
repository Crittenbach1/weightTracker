export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PEOPLE':
      return action.payload
    default:
      return state;
  }
}
