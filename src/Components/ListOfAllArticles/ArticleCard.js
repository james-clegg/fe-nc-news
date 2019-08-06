import React from "react";
import { Link } from "@reach/router";

const ArticleCard = props => {
  const {
    title,
    author,
    topic,
    votes,
    comment_count,
    article_id
  } = props.article;
  return (
    <li className="articleCard">
      Title: {title}
      <br />
      Author: {author}
      <br />
      Topic: {topic}
      <br />
      Votes: {votes}
      <br />
      Comment count: {comment_count}
      <br />
      <Link to={`/articles/${article_id}`}>View full article</Link>
    </li>
  );
};

export default ArticleCard;
