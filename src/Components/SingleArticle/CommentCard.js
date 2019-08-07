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
          onClick={() => this.upvoteComments(this.state.incrementedVotes)}
          disabled={this.state.incrementedVotes > 0}
        >
          Upvote Comment!{" "}
        </button>
      </li>
    );
  }

  upvoteComments = currentVotes => {
    API.upvoteComment(this.props.comment.comment_id);
    currentVotes += 1;
    this.setState({ incrementedVotes: currentVotes });
  };
}

export default CommentCard;
