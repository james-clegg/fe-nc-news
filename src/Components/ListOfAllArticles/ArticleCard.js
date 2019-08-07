import React from "react";
import { Link } from "@reach/router";

const ArticleCard = props => {
  const {
    title,
    author,
    topic,
    comment_count,
    article_id,
    created_at,
    votes
  } = props.article;
  return (
    <li className="articleCard">
      <p >Title: {title}</p>
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>
      <p>Comment count: {comment_count}</p>
      <p>Votes: {votes}</p>
      <p>Date posted: {created_at.slice(0, 9)}</p>
      <p>
        <Link to={`/articles/${article_id}`}>View full article</Link>
      </p>
    </li>
  );
};

export default ArticleCard;
