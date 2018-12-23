export default (state = [], action) => {
  switch (action.type) {
    case 'SAVE_WEIGHT':
      return action.payload
    default:
      return state;
  }
}
