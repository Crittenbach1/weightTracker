export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FOX_NEWS':
      return action.payload
    default:
      return state;
  }
}
