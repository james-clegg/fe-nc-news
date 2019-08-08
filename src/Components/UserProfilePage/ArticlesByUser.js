import React, { Component } from "react";
import * as API from "../../api";
import ArticleCard from "../ListOfAllArticles/ArticleCard";
import ErrorPage from "../ErrorPage";
import styles from "./UserProfilePage.module.css";

class ArticlesByUser extends Component {
  state = {
    articles: "",
    isLoading: true,
    error: null
  };

  render() {
    const { isLoading, articles, error } = this.state;
    if (isLoading) return <p>Loading articles...</p>;
    if (error) return <ErrorPage error={error} />;
    return (
      <section className={styles.articleListFlex}>
        {articles.map(article => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </section>
    );
  }

  componentDidMount() {
    this.getArticlesByUser();
  }

  getArticlesByUser = () => {
    const queryObj = { author: this.props.username };
    API.getArticlesWithParams(queryObj)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response: { data, status } }) => {
        this.setState({
          error: { status: status, msg: data.msg },
          isLoading: false
        });
      });
  };
}

export default ArticlesByUser;
