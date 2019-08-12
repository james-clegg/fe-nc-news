import React, { Component } from "react";
import styles from "./Voter.module.css";
import * as API from "../../api";

class Voter extends Component {
  render() {
    const { currentVotes } = this.props;

    return (
      <div>
        <button
          className={styles.voteButton}
          onClick={() => this.voter(currentVotes, 1)}
          disabled={currentVotes > 0}
        >
          <p className={styles.buttonText}>Upvote article!</p>
        </button>
        <button
          className={styles.voteButton}
          onClick={() => this.voter(currentVotes, -1)}
          disabled={currentVotes < 0}
        >
          <p className={styles.buttonText}>Downvote article!</p>
        </button>
      </div>
    );
  }

  voter = (currentVotes, numberToIncrementBy) => {
    const { article_id, comment_id, setVotes } = this.props;
    API.voteOnCommentOrArticle(article_id, comment_id, numberToIncrementBy);
    currentVotes += numberToIncrementBy;
    console.log(currentVotes)
    setVotes(currentVotes);
  };
}

export default Voter;
