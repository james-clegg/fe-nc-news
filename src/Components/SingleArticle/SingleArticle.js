import React, { Component } from "react";
import * as API from "../../api";

class SingleArticle extends Component {
  state = {
    article: "",
    incrementedVotes: 0
  };

  render() {
    const {
      author,
      title,
      body,
      created_at,
      comment_count
    } = this.state.article;
    let { votes } = this.state.article;
    return (
      <>
        {this.state.article ? (
          <section className="SingleArticle">
            <h2>{title}</h2>
            <p className="bodyOfArticle"> {body}</p>
            <p className="votesOnArticle">
              Votes: {(votes += this.state.incrementedVotes)}
            </p>
            <p className="extraInfoOnArticle">By: {author}</p>
            <p className="extraInfoOnArticle">
              Created on: {created_at.slice(0, 9)}
            </p>
            <p className="extraInfoOnArticle">
              Number of comments: {comment_count}
            </p>
            <button
              onClick={() => this.articleVoter(this.state.incrementedVotes, 1)}
              disabled={this.state.incrementedVotes > 0}
            >
              Upvote article!{" "}
              <span role="img" aria-label="up arrow">
                ⬆️
              </span>
            </button>
            <button
              onClick={() => this.articleVoter(this.state.incrementedVotes, -1)}
              disabled={this.state.incrementedVotes < 0}
            >
              Downvote article!{" "}
              <span role="img" aria-label="down arrow">
                ⬇️
              </span>
            </button>
          </section>
        ) : (
          "Loading article..."
        )}
      </>
    );
  }

  componentDidMount() {
    API.getArticleByArticleID(this.props.id).then(article => {
      this.setState({ article });
    });
  }

  articleVoter = (currentVotes, numberToIncrementBy) => {
    API.voteOnArticle(this.props.id, numberToIncrementBy);
    currentVotes += numberToIncrementBy;
    this.setState({ incrementedVotes: currentVotes });
  };
}

export default SingleArticle;
