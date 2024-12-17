import { fetchAllArticles } from "../../api";
import { useState, useEffect } from "react";
import ArticleCards from "../ArticleCard/ArticleCards";
import "./Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles().then((articles) => {
      console.log(articles);
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return "Loading...";

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
