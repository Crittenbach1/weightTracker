export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BBC_NEWS':
      return action.payload
    default:
      return state;
  }
}
