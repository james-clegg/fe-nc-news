import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import QuerySelectors from "./QuerySelectors";
import * as API from "../../api";
import styles from "./ListOfArticles.module.css";
import ErrorPage from "../ErrorPage";

class ListOfAllArticles extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    filterByTopic: "",
    order: "desc",
    error: null
  };

  render() {
    if (this.state.error) return <ErrorPage error={this.state.error} />;
    return (
      <>
        <p className={styles.listOfArticlesHeader}>Articles</p>
        <QuerySelectors updateQueries={this.updateQueries} />
        <section className={styles.articleListFlex}>
          {this.state.articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </section>
      </>
    );
  }

  componentDidMount() {
    this.getAllTheArticles();
  }

  getAllTheArticles = () => {
    API.getAllArticles()
      .then(articles => this.setState({ articles }))
      .catch(({ response: { data, status } }) => {
        this.setState({
          error: { status: status, msg: data.msg }
        });
      });
  };

  updateQueries = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { sort_by, filterByTopic, order } = this.state;
    if (
      prevState.sort_by !== sort_by ||
      prevState.filterByTopic !== filterByTopic ||
      prevState.order !== order
    ) {
      const queryObj = { sort_by, order, filterByTopic };
      API.getArticlesWithParams(queryObj).then(articles =>
        this.setState({ articles })
      );
    }
  };
}

export default ListOfAllArticles;
