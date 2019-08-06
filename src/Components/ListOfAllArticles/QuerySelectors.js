import React from "react";

const QuerySelectors = props => {
  return (
    <>
      <label>
        Sort_by:
        <select name={"sort_by"} onChange={props.updateQueries}>
          <option>Date posted</option>
          <option>Votes</option>
          <option>Most comments</option>
        </select>
      </label>
      <label>
        Order:
        <select name={"order"} onChange={props.updateQueries}>
          <option>Desc</option>
          <option>Asc</option>
        </select>
      </label>
      <label>
        Filter by topic:
        <select name={"filterByTopic"} onChange={props.updateQueries}>
          <option>No filter</option>
          <option>Coding</option>
          <option>Football</option>
          <option>Cooking</option>
        </select>
      </label>
    </>
  );
};

export default QuerySelectors;
