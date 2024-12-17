import "./ArticleCards.css";
import { Link } from "react-router-dom";

const ArticleCards = ({ article }) => {
  return (
    <>
      <div className="article_cards">
        <Link to={`/articles/${article.article_id}`}>
          <h3>{article.title}</h3>
          <img
            src={article.article_img_url}
            alt={article.title}
            style={{ width: "20em", height: "15em" }}
          />
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
          <time dateTime="2020-11-07">
            <i>{article.created_at.split("T")[0]}</i>
          </time>
        </Link>
      </div>
    </>
  );
};

export default ArticleCards;
