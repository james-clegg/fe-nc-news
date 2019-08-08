import React, { Component } from "react";
import * as API from "../../api";
import ArticleCard from "../ListOfAllArticles/ArticleCard";

class ArticlesByUser extends Component {
  state = {
    articles: "",
    isLoading: true
  };

  render() {
    const { isLoading, articles } = this.state;
    if (isLoading) return <p>Loading articles...</p>;
    return (
      <div>
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const queryObj = { author: this.props.username };
    API.getArticlesWithParams(queryObj).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }
}

export default ArticlesByUser;
