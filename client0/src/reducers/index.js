import { combineReducers } from 'redux';
import bbcNews from './bbcNewsReducer.js';
import foxNews from './foxNewsReducer.js';
import savedArticles from './savedArticlesReducer.js';
import saveArticle from './saveArticleReducer.js';
import likeArticle from './likeArticleReducer.js';


export default combineReducers({
  bbcNews,
  foxNews,
  savedArticles,
  saveArticle,
  likeArticle,
});
