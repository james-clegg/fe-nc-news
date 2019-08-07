import axios from "axios";

const request = axios.create({
  baseURL: "https://jc-nc-news.herokuapp.com/api/"
});

export const getAllArticles = () => {
  return request.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticlesWithParams = (sort_by, order, topic) => {
  return request
    .get("/articles", {
      params: {
        sort_by: sort_by,
        order: order,
        topic: topic
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const upvoteComment = comment_id => {
  return request.patch(`comments/${comment_id}`, { inc_votes: 1 });
};

export const getCommentsOnArticle = id => {
  return request
    .get(`/articles/${id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const getArticleByArticleID = id => {
  return request
  .get(`/articles/${id}`).then(({data: {article}}) => {
    return article;
  })
}
