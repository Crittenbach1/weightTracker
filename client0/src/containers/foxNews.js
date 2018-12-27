import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js'
import NewsArticle from '../components/NewsArticle.js'
import { saveArticle } from '../actions/saveArticlesActions.js'


import '../App.css';

class FoxNews extends Component {

  render() {
      return (
        <div>
          <Header title="Fox" />
          {this.props.news.map(article=><NewsArticle article={article} saveArticle={this.props.saveArticle}/>)}
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {news: state.foxNews}
}

export default connect(mapStateToProps, {saveArticle})(FoxNews);
