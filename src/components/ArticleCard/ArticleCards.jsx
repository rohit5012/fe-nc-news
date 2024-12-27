import "./ArticleCards.css";
import { Link } from "react-router-dom";

const ArticleCards = ({ article }) => {
  return (
    <div>
      <Link to={`/articles/${article.article_id}`} className="article_cards">
        <h5>{article.title}</h5>
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
  );
};

export default ArticleCards;
