import React, { Component } from "react";
import * as API from "../../api";
import ArticleCard from "../ListOfAllArticles/ArticleCard";

class FeaturedArticles extends Component {
  state = {
    articles: "",
    isLoading: true
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading articles...</p>;
    return (
      <>
        <p className="WelcomeMessage">Featured articles:</p>
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </>
    );
  }

  componentDidMount() {
    this.getFeaturedArticles();
  }

  getFeaturedArticles = () => {
    const queryObj = { sort_by: "votes", order: "desc" };
    API.getArticlesWithParams(queryObj).then(articles => {
      this.setState({ articles: articles.slice(0, 3), isLoading: false });
    });
  };
}

export default FeaturedArticles;
