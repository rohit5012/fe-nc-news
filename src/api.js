import axios from "axios";

const api = axios.create({
  baseURL: "https://expressjs-app.onrender.com/api",
});

export const fetchAllArticles = () => {
  return api.get("/articles").then(({ data }) => {
    console.log(data.articles);

    return data.articles;
  });
};
