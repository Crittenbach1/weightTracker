import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js'
import NewsArticle from '../components/NewsArticle.js'
import { saveArticle } from '../actions/saveArticlesActions.js'


import '../App.css';

class BbcNews extends Component {

  render() {
      return (
        <div>
          <Header title="BBC" />
          {this.props.news.map(article=><NewsArticle article={article} saveArticle={this.props.saveArticle} />)}
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  debugger
  return {news: state.bbcNews}
}


export default connect(mapStateToProps, {saveArticle})(BbcNews);
