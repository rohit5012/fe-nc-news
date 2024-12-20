import "./IndividualArticle.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../../api";
import Comments from "../Comments/Comments";
import VoteArticle from "../VoteArticle/VoteArticle";

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
        setError(true);
      });
  }, [article_id]);

  if (isLoading) return "Loading...";
  if (error) {
    return <p>Error</p>;
  }

  return (
    <Container>
      <h3>{article.title}</h3>
      <img
        src={article.article_img_url}
        alt={article.title}
        style={{ width: "20em", height: "15em" }}
      />
      <p>
        <i>{article.body}</i>
      </p>
      {/* <p>{article.created_at.split("T")[0]}</p> */}
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
        <span>
          , Votes:
          <i>
            <strong> {article.votes}</strong>
          </i>
        </span>
      </p>
      <VoteArticle votes={article.votes} article_id={article.article_id} />
      <Comments article_id={article_id} />
    </Container>
  );
};

export default IndividualArticle;
