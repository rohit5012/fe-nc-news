import "./IndividualArticle.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../../api";
import Comments from "../Comments/Comments";

const IndividualArticle = () => {
  const [article, setArticle] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setError(true);
      });
  }, []);

  if (isLoading) return "Loading...";
  if (error) {
    return <p>Error</p>;
  }

  return (
    <div>
      <h3>{article.title}</h3>
      <img
        src={article.article_img_url}
        alt={article.title}
        style={{ width: "20em", height: "15em" }}
      />
      {/* <p>
        <i>{article.created_at.split("T")[0]}</i>
      </p> */}
      <p>
        Author:
        <i>
          <strong> {article.author}</strong>
        </i>
        <span>
          , Topic:
          <i>
            <strong> {article.topic}</strong>
          </i>
        </span>
      </p>
      <Comments article_id={article_id} />
    </div>
  );
};

export default IndividualArticle;
