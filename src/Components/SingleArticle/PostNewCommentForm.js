import React, { Component } from "react";

class PostNewCommentForm extends Component {
  state = {
    comment: ""
  };

  render() {
    return (
      <>
        <h3>Post a new comment:</h3>
        <form onSubmit={this.handleSubmit}>
          Comment:{" "}
          <input
            type="text"
            name="comment"
            onChange={this.handleChange}
            value={this.state.comment}
          />
          {/* <input type="submit" /> */}
          <button>Submit!</button>
        </form>
      </>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    this.props.addPostedComment(comment);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
}

export default PostNewCommentForm;
