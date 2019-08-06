import React, { Component } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import QuerySelectors from "./QuerySelectors";

class ListOfAllArticles extends Component {
  state = {
    articles: [],
    sort_by: null,
    filterByTopic: null,
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
    axios
      .get("https://jc-nc-news.herokuapp.com/api/articles")
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      });
  }

  updateQueries = ({ target: { name, value } }) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { sort_by, filterByTopic, order } = this.state;
    if (
      prevState.sort_by !== sort_by ||
      prevState.filterByTopic !== filterByTopic ||
      prevState.order !== order
    ) {
      axios
        .get("https://jc-nc-news.herokuapp.com/api/articles", {
          params: {
            sort_by: this.state.sort_by,
            order: this.state.order,
            topic: this.state.filterByTopic
          }
        })
        .then(({ data }) => {
          this.setState({ articles: data.articles });
        });
    }
  };
}

export default ListOfAllArticles;
