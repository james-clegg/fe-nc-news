import axios from "axios";

const request = axios.create({
  baseURL: "https://jc-nc-news.herokuapp.com/api/"
});

export const getAllArticles = () => {
  return request.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticlesWithParams = ({
  sort_by,
  order,
  filterByTopic,
  author
}) => {
  return request
    .get("/articles", {
      params: {
        sort_by: sort_by,
        order: order,
        topic: filterByTopic,
        author: author
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const voteOnComment = (comment_id, numberToIncrementBy) => {
  return request.patch(`comments/${comment_id}`, {
    inc_votes: numberToIncrementBy
  });
};

export const voteOnCommentOrArticle = (
  article_id,
  comment_id,
  numberToIncrementBy
) => {
  if (article_id)
    return request.patch(`articles/${article_id}`, {
      inc_votes: numberToIncrementBy
    });
  else if (comment_id)
    return request.patch(`comments/${comment_id}`, {
      inc_votes: numberToIncrementBy
    });
};

export const getCommentsOnArticle = id => {
  return request
    .get(`/articles/${id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const getArticleByArticleID = id => {
  return request.get(`/articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
};

export const postNewComment = (username, comment, article_id) => {
  return request
    .post(`/articles/${article_id}/comments`, { username, body: comment })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = comment_id => {
  return request.delete(`/comments/${comment_id}`).then(response => {
    return response;
  });
};

export const getUserInfo = username => {
  return request.get(`/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};
