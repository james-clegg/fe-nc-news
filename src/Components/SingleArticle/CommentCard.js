import React, { Component } from "react";
import * as API from "../../api";

class CommentCard extends Component {
  state = {
    incrementedVotes: 0
  };

  render() {
    const { author, body, created_at } = this.props.comment;
    let { votes } = this.props.comment;

    return (
      <li className="commentItem">
        <p> Author: {author}</p>
        <p>{body}</p>
        <p>Created on: {created_at.slice(0, 9)}</p>
        <p>Votes: {(votes += this.state.incrementedVotes)}</p>
        <button
          onClick={() => this.voter(this.state.incrementedVotes, 1)}
          disabled={this.state.incrementedVotes > 0}
        >
          Upvote comment!{" "}
        </button>
        <button
          onClick={() => this.voter(this.state.incrementedVotes, -1)}
          disabled={this.state.incrementedVotes < 0}
        >
          Downvote comment!
        </button>
        <button onClick={this.deleteComment}>Delete comment</button>
      </li>
    );
  }

  voter = (currentVotes, numberToIncrementBy) => {
    API.upvoteComment(this.props.comment.comment_id, numberToIncrementBy);
    currentVotes += numberToIncrementBy;
    this.setState({ incrementedVotes: currentVotes });
  };

  deleteComment = () => {
    const { comment_id } = this.props.comment;
    API.deleteComment(comment_id);
    this.props.removeDeletedCommentFromArray(comment_id);
  };
}

export default CommentCard;
