import React, { Component } from "react";
import styles from "./comments.module.css";

class PostNewCommentForm extends Component {
  state = {
    comment: ""
  };

  render() {
    return (
      <>
        <h3 className={styles.commentSubheader}>Post a new comment:</h3>
        <form onSubmit={this.handleSubmit}>
          <p className={styles.commentSubheader}>Comment: </p>
          <textarea
            className={styles.newCommentBox}
            rows="10"
            cols="40"
            name="comment"
            onChange={this.handleChange}
            value={this.state.comment}
            required
          />{" "}
          <br />
          <button>Submit!</button>
        </form>
      </>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    this.props.addPostedComment(comment);
    this.setState({ comment: "" });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
}

export default PostNewCommentForm;
