import axios from "axios";

const api = axios.create({
  baseURL: "https://expressjs-app.onrender.com/api",
});

export const fetchAllArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const fetchSingleArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};
