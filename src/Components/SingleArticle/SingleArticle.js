import React, { Component } from "react";
import axios from "axios";

class SingleArticle extends Component {
  state = {
    article: ""
  };

  render() {
    const {
      author,
      title,
      body,
      topic,
      votes,
      created_at,
      comment_count
    } = this.state.article;
    return (
      <>
        {this.state.article ? (
          <section className="SingleArticle">
            <h2>{title}</h2>
            <p>By: {author}</p>
            <p>Topic: {topic}</p>
            <p> {body}</p>
            <p>Votes: {votes}</p>
            <p>Created on: {created_at.slice(0, 9)}</p>
            <p>Number of comments: {comment_count}</p>
          </section>
        ) : (
          "Loading article..."
        )}
      </>
    );
  }

  componentDidMount() {
    axios
      .get(`https://jc-nc-news.herokuapp.com/api/articles/${this.props.id}`)
      .then(({ data }) => {
        this.setState({ article: data.article });
      });
  }
}

export default SingleArticle;
