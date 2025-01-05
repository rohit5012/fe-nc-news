import "./ArticleCards.css";
import { Link } from "react-router-dom";

const ArticleCards = ({ article }) => {
  return (
    <section className="articlesCards_section">
      <div className="articleCards_image">
        <img
          className="articleCards_img"
          src={article.article_img_url}
          alt={article.title}
        />
        <div className="articlesCards_title">
          <h5>{article.title}</h5>
          <p>
            Topic:
            <i>
              <strong> {article.topic}</strong>
            </i>
          </p>
          <Link
            to={`/articles/${article.article_id}`}
            className="article_cards_readmore"
          >
            Read more....
          </Link>
        </div>
      </div>
      <div className="articleCards_info">
        <span>
          Author:
          <i>
            <strong> {article.author}</strong>
          </i>
        </span>
        <span>
          Votes:
          <i>
            <strong> {article.votes}</strong>
          </i>
        </span>
        <span>
          Comments:
          <i>
            <strong> {article.comment_count}</strong>
          </i>
        </span>
        <time dateTime="2020-11-07">
          <i>{article.created_at.split("T")[0]}</i>
        </time>
      </div>
    </section>
  );
};

export default ArticleCards;
