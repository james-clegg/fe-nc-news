import React, { Component } from "react";
import * as API from "../../api";
import CommentCard from "./CommentCard";
import PostNewCommentForm from "./PostNewCommentForm";
import styles from "./comments.module.css";
import ErrorPage from "../ErrorPage";

class CommentsOnArticle extends Component {
  state = {
    comments: "",
    isLoading: true,
    didDelete: false,
    error: null
  };

  render() {
    if (this.state.isLoading) return <p>Loading...</p>;
    if (this.state.error) return <ErrorPage error={this.state.error} />;
    return (
      <>
        <h2 className={styles.commentHeader}>Comments</h2>

        {this.state.didDelete && (
          <p className={styles.commentSuccessMessage}>
            Comment was successfully deleted!
          </p>
        )}
        <PostNewCommentForm
          addPostedComment={this.addPostedComment}
          user={this.props.user}
        />
        <ul className={styles.listOfComments}>
          {this.state.comments.map(comment => {
            return (
              <CommentCard
                comment={comment}
                id={this.props.id}
                key={comment.comment_id}
                removeDeletedCommentFromArray={
                  this.removeDeletedCommentFromArray
                }
                user={this.props.user}
              />
            );
          })}
        </ul>
      </>
    );
  }

  componentDidMount() {
    this.getTheComments();
  }

  getTheComments = () => {
    API.getCommentsOnArticle(this.props.id)
      .then(comments => {
        this.setState({
          comments: comments,
          isLoading: false
        });
      })
      .catch(({ response: { data, status } }) => {
        this.setState({
          error: { status: status, msg: data.msg },
          isLoading: false
        });
      });
  };

  addPostedComment = comment => {
    API.postNewComment(this.props.user, comment, this.props.id).then(
      comment => {
        this.setState(currentState => {
          const comments = [comment, ...currentState.comments];
          return { comments, didDelete: false };
        });
      }
    );
  };

  removeDeletedCommentFromArray = comment_id => {
    this.setState(currentState => {
      const newComments = currentState.comments.filter(comment => {
        return comment.comment_id !== comment_id;
      });
      return {
        comments: newComments,
        didDelete: true
      };
    });
  };
}

export default CommentsOnArticle;
