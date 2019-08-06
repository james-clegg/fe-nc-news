import React from "react";
import { Link } from "@reach/router";

const ArticleCard = props => {
  const {
    title,
    author,
    topic,
    comment_count,
    article_id,
    created_at
  } = props.article;
  return (
    <li className="articleCard">
      Title: {title}
      <br />
      Author: {author}
      <br />
      Topic: {topic}
      <br />
      Comment count: {comment_count}
      <br />
      Date posted: {created_at.slice(0, 9)}
      <br />
      <Link to={`/articles/${article_id}`}>View full article</Link>
    </li>
  );
};

export default ArticleCard;
