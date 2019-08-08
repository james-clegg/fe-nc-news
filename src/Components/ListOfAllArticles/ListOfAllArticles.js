import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import QuerySelectors from "./QuerySelectors";
import * as API from "../../api";

class ListOfAllArticles extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    filterByTopic: "",
    order: "desc"
  };

  render() {
    return (
      <>
        <h2 className="listOfArticlesHeader">Articles</h2>
        <QuerySelectors updateQueries={this.updateQueries} />
        <ul>
          {this.state.articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </>
    );
  }

  componentDidMount() {
    API.getAllArticles().then(articles => this.setState({ articles }));
  }

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
      const queryObj = {sort_by, order, filterByTopic};
      API.getArticlesWithParams(queryObj).then(articles =>
        this.setState({ articles })
      );
    }
  };
}

export default ListOfAllArticles;
