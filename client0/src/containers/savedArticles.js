import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js'
import SavedNewsArticle from '../components/SavedNewsArticle.js'
import { likeArticle } from '../actions/likeArticleActions.js'
import { fetchSavedArticles } from '../actions/savedArticlesActions.js';

import '../App.css';

class SavedArticles extends Component {



  render() {

      return (
          <div>
           <Header title="Saved News Articles" />
            {this.props.articles.map(article=><SavedNewsArticle key={article.id} article={article} likeArticle={this.props.likeArticle} />)}
          </div>
      );
  }
}

const mapStateToProps = (state) => {
   return {articles: state.savedArticles}
}



export default connect(mapStateToProps, {likeArticle, fetchSavedArticles})(SavedArticles);
