import React from "react";
import SingleArticle from "./SingleArticle";
import CommentsOnArticle from "./CommentsOnArticle";

const SingleArticlePage = props => {
  return (
    <>
      <SingleArticle id={props.articleID} />
      <CommentsOnArticle id={props.articleID} user={props.user} />
    </>
  );
};

export default SingleArticlePage;
