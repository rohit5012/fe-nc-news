import { fetchAllArticles } from "../../api";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleCards from "../ArticleCard/ArticleCards";
import "./Articles.css";
import { FormControl } from "@mui/material";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const topicName = searchParams.get("topic") || "";
  const sortBy = searchParams.get("sort_by") || "created_at";
  const orderBy = searchParams.get("order_by") || "DESC";

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchAllArticles(topicName, sortBy, orderBy)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [searchParams]);

  const handleTopic = (event) => {
    setSearchParams({
      topic: event.target.value,
      sort_by: sortBy,
      order_by: orderBy,
    });
  };

  const handleSort = (event) => {
    setSearchParams({
      topic: topicName,
      sort_by: event.target.value,
      order_by: orderBy,
    });
  };

  const handleOrder = () => {
    const selectedOrderBy = orderBy === "ASC" ? "DESC" : "ASC";
    setSearchParams({
      topic: topicName,
      sort_by: sortBy,
      order_by: selectedOrderBy,
    });
  };

  if (isLoading) return "Loading...";
  if (isError) {
    return <p>Sorry, unable to fetch data. Please try again later.</p>;
  }

  return (
    <section>
      <h2>All Articles</h2>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <select onChange={handleTopic} value={topicName}>
          <option value="">All Topics</option>
          <option value="football">Football</option>
          <option value="coding">Coding</option>
          <option value="cooking">Cooking</option>
        </select>
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <select onChange={handleSort} value={sortBy}>
          <option value="created_at">Date</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comment Count</option>
        </select>
      </FormControl>

      <button onClick={handleOrder}>
        {orderBy === "ASC"
          ? "Sort By Descending Order"
          : "Sort By Ascending Order"}
      </button>
      <ul>
        {articles.map((article, article_id) => {
          return (
            <li key={article_id} className="article_list">
              <ArticleCards article={article} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Articles;
