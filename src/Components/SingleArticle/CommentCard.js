import React, { Component } from "react";
import * as API from "../../api";
import styles from "./comments.module.css";
import ErrorPage from "../ErrorPage";
import Voter from "./Voter";

class CommentCard extends Component {
  state = {
    currentVotes: 0,
    error: null
  };

  render() {
    const { author, body, created_at, comment_id } = this.props.comment;
    let { votes } = this.props.comment;
    if (this.state.error) return <ErrorPage error={this.state.error} />;
    return (
      <li className={styles.commentItem}>
        <p> Author: {author}</p>
        <p>{body}</p>
        <p>Created on: {created_at.slice(0, 9)}</p>
        <p>Votes: {(votes += this.state.currentVotes)}</p>
        <Voter
          comment_id={comment_id}
          currentVotes={this.state.currentVotes}
          setVotes={this.setVotes}
        />
        {this.props.user === author && (
          <button className={styles.buttonText} onClick={this.deleteComment}>
            <p className={styles.buttonText}>Delete comment</p>
          </button>
        )}
      </li>
    );
  }

  setVotes = currentVotes => {
    this.setState({ currentVotes });
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
