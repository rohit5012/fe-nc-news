import { fetchAllArticles } from "../../api";
import { useState, useEffect } from "react";
import ArticleCards from "../ArticleCard/ArticleCards";
import "./Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchAllArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  if (isLoading) return "Loading...";
  if (isError) {
    return <p>Error</p>;
  }

  return (
    <>
      <h2>All Articles</h2>
      <ul>
        {articles.map((article, article_id) => {
          return (
            <div className="article_list" key={article_id}>
              <li>
                <ArticleCards article={article} />
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
