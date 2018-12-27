import React from 'react';

const NewsArticle = (props) => {

  return (
    <div className="article">

      <img className="article-images" alt = "" src={props.article.urlToImage}/>
       <h3><a href={props.article.url}>{props.article.title}</a></h3>
       <p>{props.article.description}</p>
       <p className={props.article.title}></p>
       <p class={props.article.title}></p>
       <br/>
       <input type="submit" onClick={() => {
         props.saveArticle(props.article)
       }} value="Save Article"/>
    </div>
  )
}

export default NewsArticle;
