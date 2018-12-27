export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SAVED_ARTICLES':
      return action.payload
    case 'LIKE_ARTICLE':
    return state.map(function(article) {
        if (article.id !== action.payload.id) {
          return article } else {
          return action.payload }
      })
    default:
      return state;
  }
}
