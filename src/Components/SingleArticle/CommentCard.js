import React, { Component } from "react";
import * as API from "../../api";
import styles from "./comments.module.css";
import ErrorPage from "../ErrorPage";

class CommentCard extends Component {
  state = {
    incrementedVotes: 0,
    error: null
  };

  render() {
    const { author, body, created_at } = this.props.comment;
    let { votes } = this.props.comment;
    if (this.state.error) return <ErrorPage error={this.state.error} />;
    return (
      <li className={styles.commentItem}>
        <p> Author: {author}</p>
        <p>{body}</p>
        <p>Created on: {created_at.slice(0, 9)}</p>
        <p>Votes: {(votes += this.state.incrementedVotes)}</p>
        <button
          className={styles.buttonStyle}
          onClick={() => this.commentVoter(this.state.incrementedVotes, 1)}
          disabled={this.state.incrementedVotes > 0}
        >
          <p className={styles.buttonText}>Upvote comment!</p>
        </button>
        <button
          className={styles.buttonStyle}
          onClick={() => this.commentVoter(this.state.incrementedVotes, -1)}
          disabled={this.state.incrementedVotes < 0}
        >
          <p className={styles.buttonText}>Downvote comment!</p>
        </button>
        {this.props.user === author && (
          <button className={styles.buttonText} onClick={this.deleteComment}>
            <p className={styles.buttonText}>Delete comment</p>
          </button>
        )}
      </li>
    );
  }

  commentVoter = (currentVotes, numberToIncrementBy) => {
    API.voteOnComment(this.props.comment.comment_id, numberToIncrementBy);
    currentVotes += numberToIncrementBy;
    this.setState({ incrementedVotes: currentVotes });
  };

  deleteComment = () => {
    const { comment_id } = this.props.comment;
    API.deleteComment(comment_id).catch(({ response: { data, status } }) => {
      this.setState({
        error: { status: status, msg: data.msg }
      });
    });
    this.props.removeDeletedCommentFromArray(comment_id);
  };
}

export default CommentCard;
