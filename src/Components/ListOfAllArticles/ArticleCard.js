import React from "react";
import { Link } from "@reach/router";
import styles from './ArticleCard.module.css'

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
    <li className={styles.articleCard}>
      <Link to={`/articles/${article_id}`}>
        <h3 className={styles.articleCardHeader}>{title}</h3>
      </Link>
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>
      <p>Comment count: {comment_count}</p>
      <p>Votes: {votes}</p>
      <p>Date posted: {created_at.slice(0, 9)}</p>
    </li>
  );
};

export default ArticleCard;
