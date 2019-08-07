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
          <textarea
            rows='10'
            cols='80'
            name="comment"
            onChange={this.handleChange}
            value={this.state.comment}
          />
          <button>Submit!</button>
        </form>
      </>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    this.props.addPostedComment(comment);
    this.setState({comment: ''})
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
}

export default PostNewCommentForm;
