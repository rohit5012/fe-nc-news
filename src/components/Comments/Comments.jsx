import { fetchArticleComments } from "../../api";
import { useState, useEffect } from "react";
import CommentCard from "../CommentCard/CommentCard";
import "./Comments.css";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchArticleComments(article_id)
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  return (
    <div>
      <h2>All Comments</h2>
      <ul>
        {comments.map((comment, comment_id) => {
          return (
            <div className="comment_list" key={comment_id}>
              <li>
                <CommentCard comment={comment} />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
