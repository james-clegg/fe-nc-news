import React, { Component } from "react";
import * as API from "../../api";
import styles from "./SingleArticle.module.css";
import ErrorPage from "../ErrorPage";
import Voter from "./Voter";

class SingleArticle extends Component {
  state = {
    article: "",
    currentVotes: 0,
    error: null,
    isLoading: true
  };

  render() {
    const {
      author,
      title,
      body,
      created_at,
      comment_count
    } = this.state.article;
    let { votes } = this.state.article;
    if (this.state.isLoading) return <p>Loading...</p>;
    if (this.state.error) return <ErrorPage error={this.state.error} />;
    return (
      <>
        <section className={styles.SingleArticle}>
          <h2 className={styles.SingleArticleTitle}>{title}</h2>
          <p className={styles.bodyOfArticle}> {body}</p>
          <p className={styles.votesOnArticle}>
            Votes: {(votes += this.state.currentVotes)}
          </p>
          <p className={styles.extraInfoOnArticle}>By: {author}</p>
          <p className={styles.extraInfoOnArticle}>
            Created on: {created_at.slice(0, 9)}
          </p>
          <p className={styles.extraInfoOnArticle}>
            Number of comments: {comment_count}
          </p>
          <Voter
            article_id={this.props.id}
            currentVotes={this.state.currentVotes}
            setVotes={this.setVotes}
          />
        </section>
      </>
    );
  }

  componentDidMount() {
    this.getTheArticle();
  }

  getTheArticle = () => {
    API.getArticleByArticleID(this.props.id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response: { data, status } }) => {
        this.setState({
          error: { status: status, msg: data.msg },
          isLoading: false
        });
      });
  };

  setVotes = currentVotes => {
    this.setState({ currentVotes });
  };
}

export default SingleArticle;
