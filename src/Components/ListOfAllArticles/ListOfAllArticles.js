import React, { Component } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

class ListOfAllArticles extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <>
        <h2 className="listOfArticlesHeader">Articles</h2>
        <ul>
          {this.state.articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </>
    );
  }

  componentDidMount() {
    axios
      .get("https://jc-nc-news.herokuapp.com/api/articles")
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      });
  }
}

export default ListOfAllArticles;
