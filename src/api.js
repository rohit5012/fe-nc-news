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

export const fetchArticleComments = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const updateArticleVotes = (article_id, votes) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then((results) => {
      return results;
    });
};

export const postNewComment = (article_id, username, comment) => {
  return api.post(`/articles/${article_id}/comments`, {
    username: username,
    body: comment,
  });
};
