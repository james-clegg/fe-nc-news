import React, { Component } from "react";
import * as API from "../../api";
import CommentCard from "./CommentCard";
import PostNewCommentForm from "./PostNewCommentForm";

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
            <PostNewCommentForm
              addPostedComment={this.addPostedComment}
              user={this.props.user}
            />
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

  addPostedComment = comment => {
    API.postNewComment(this.props.user, comment, this.props.id).then(
      comment => {
        this.setState(currentState => {
          const comments = [comment, ...currentState.comments];
          return { comments };
        });
      }
    );
  };
}

export default CommentsOnArticle;
