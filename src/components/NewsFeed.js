import React, { Component } from "react";
import { articles } from "../seedData";

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles
    };
  }

  render() {
    return this.state.articles.map((article, i) => {
      return (
        <div key={i}>
          <h3>
            {" "}
            <a href={article.url}>{article.title}</a>
          </h3>
          <p>{article.author}</p>
          <img src={article.urlToImage} alt="" />
          <p>{article.description}</p>
          <div>Upvotes: {article.votes}</div>
        </div>
      );
    });
  }
}

export default NewsFeed;
