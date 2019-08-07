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
