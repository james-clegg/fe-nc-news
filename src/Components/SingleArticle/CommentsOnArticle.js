import React, { Component } from "react";
import axios from "axios";
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
    axios
      .get(
        `https://jc-nc-news.herokuapp.com/api/articles/${
          this.props.id
        }/comments`
      )
      .then(({ data }) => {
        this.setState({
          comments: data.comments,
          requestDone: true
        });
      });
  }

}

export default CommentsOnArticle;
