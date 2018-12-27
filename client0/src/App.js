import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import bbcNews from './containers/bbcNews.js'
import foxNews from './containers/foxNews.js'
import { fetchBbcNews } from './actions/bbcNewsActions.js';
import { fetchFoxNews } from './actions/foxNewsActions.js';
import { fetchSavedArticles } from './actions/savedArticlesActions.js';
import Footer from './components/Footer.js'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import SavedArticles from './containers/savedArticles.js'


class App extends Component {

  componentDidMount() {
     this.props.fetchBbcNews()
     this.props.fetchFoxNews()
     this.props.fetchSavedArticles()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Top News</h1>
        </header>
        <Router>
          <div>
            <NavBar />
            <Route path="/" exact component={Home} />
            <Route path="/bbcNews" component={bbcNews} />
            <Route path="/foxNews" component={foxNews} />
            <Route path="/savedArticles" component={SavedArticles} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default connect(null, {fetchFoxNews, fetchBbcNews, fetchSavedArticles})(App);
