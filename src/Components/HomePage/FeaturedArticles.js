import React, { Component } from "react";
import * as API from "../../api";
import ArticleCard from "../ListOfAllArticles/ArticleCard";
import styles from "./HomePage.module.css";
import ErrorPage from "../ErrorPage";

class FeaturedArticles extends Component {
  state = {
    articles: "",
    isLoading: true,
    error: null
  };

  render() {
    const { articles, isLoading, error } = this.state;
    if (isLoading) return <p>Loading articles...</p>;
    if (error) return <ErrorPage error={error} />;
    return (
      <>
        <p className={styles.header}>Featured articles:</p>
        <section className={styles.featuredListFlex}>
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </section>
      </>
    );
  }

  componentDidMount() {
    this.getFeaturedArticles();
  }

  getFeaturedArticles = () => {
    const queryObj = { sort_by: "votes", order: "desc" };
    API.getArticlesWithParams(queryObj)
      .then(articles => {
        this.setState({ articles: articles.slice(0, 3), isLoading: false });
      })
      .catch(({response: {data}}) => {
        this.setState({ error: {status: data.status, msg: data.msg}, isLoading: false})});
  };
}

export default FeaturedArticles;
