import React, { Component } from "react";
import * as API from "../../api";
import CommentCard from "./CommentCard";

class CommentsOnArticle extends Component {
  state = {
    comments: "",
    requestDone: false
  };

  render() {
    return (
      <>
        {this.state.requestDone === true ? (
          <>
            <h2>Comments</h2>
            <ul>
              {this.state.comments.map(comment => {
                return (
                  <CommentCard
                    comment={comment}
                    id={this.props.id}
                    key={comment.comment_id}
                  />
                );
              })}
            </ul>
          </>
        ) : (
          "Loading comments..."
        )}
      </>
    );
  }

  componentDidMount() {
    API.getCommentsOnArticle(this.props.id).then(comments => {
      this.setState({
        comments: comments,
        requestDone: true
      });
    });
  }
}

export default CommentsOnArticle;
