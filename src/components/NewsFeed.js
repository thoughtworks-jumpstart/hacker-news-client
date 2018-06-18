import React, { Component } from "react";

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  render() {
    return this.state.articles.map((article, i) => {
      
    });
  }
}

export default NewsFeed;
