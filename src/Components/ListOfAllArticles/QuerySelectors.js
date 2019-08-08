import React from "react";
import styles from './QuerySelectors.module.css'

const QuerySelectors = props => {
  return (
    <>
      <label className={styles.querySelectorLabel}>
        Sort_by:
        <select name={"sort_by"} onChange={props.updateQueries}>
          <option value="created_at">Date posted</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Number of comments</option>
        </select>
      </label>
      <label className={styles.querySelectorLabel}>
        Order:
        <select name={"order"} onChange={props.updateQueries}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
      <label className={styles.querySelectorLabel}>
        Filter by topic:
        <select name={"filterByTopic"} onChange={props.updateQueries}>
          <option value="">No filter</option>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
          <option value="cooking">Cooking</option>
        </select>
      </label>
    </>
  );
};

export default QuerySelectors;
