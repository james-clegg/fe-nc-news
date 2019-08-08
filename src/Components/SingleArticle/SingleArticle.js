import React, { Component } from "react";
import * as API from "../../api";
import styles from "./SingleArticle.module.css";
import ErrorPage from "../ErrorPage";

class SingleArticle extends Component {
  state = {
    article: "",
    incrementedVotes: 0,
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
            Votes: {(votes += this.state.incrementedVotes)}
          </p>
          <p className={styles.extraInfoOnArticle}>By: {author}</p>
          <p className={styles.extraInfoOnArticle}>
            Created on: {created_at.slice(0, 9)}
          </p>
          <p className={styles.extraInfoOnArticle}>
            Number of comments: {comment_count}
          </p>
          <button
            onClick={() => this.articleVoter(this.state.incrementedVotes, 1)}
            disabled={this.state.incrementedVotes > 0}
          >
            Upvote article!{" "}
            <span role="img" aria-label="up arrow">
              ⬆️
            </span>
          </button>
          <button
            onClick={() => this.articleVoter(this.state.incrementedVotes, -1)}
            disabled={this.state.incrementedVotes < 0}
          >
            Downvote article!{" "}
            <span role="img" aria-label="down arrow">
              ⬇️
            </span>
          </button>
        </section>
      </>
    );
  }

  componentDidMount() {
    this.getTheArticle()
  }
  
  getTheArticle = () => {
    API.getArticleByArticleID(this.props.id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        this.setState({
          error: { status: data.status, msg: data.msg },
          isLoading: false
        });
      });

  }

  articleVoter = (currentVotes, numberToIncrementBy) => {
    API.voteOnArticle(this.props.id, numberToIncrementBy);
    currentVotes += numberToIncrementBy;
    this.setState({ incrementedVotes: currentVotes });
  };
}

export default SingleArticle;
