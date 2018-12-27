import React, { Component } from 'react';

class SavedNewsArticle extends Component {


  updateStateLikes = () => {

       var newArticle = {
         id: this.props.article.id,
         title: this.props.article.title,
         url: this.props.article.url,
         author: this.props.article.author,
         description: this.props.article.description,
         likes: this.props.article.likes + 1
       };
       this.props.likeArticle(newArticle);

   }


  render() {

      return (
        <div>
           <h3><a href={this.props.article.url}>{this.props.article.title}</a></h3>
           <p>{this.props.article.author}</p>
           <p>{this.props.article.description}</p>
           <p>likes: {this.props.article.likes}</p>
           <button onClick={() => {
            this.updateStateLikes();
           }}> Like </button>
        </div>
      );
  }

}

export default SavedNewsArticle;
