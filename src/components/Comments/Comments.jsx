import { fetchArticleComments, postNewComment } from "../../api";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/User";
import CommentCard from "../CommentCard/CommentCard";
import "./Comments.css";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [commentPosted, setCommentPosted] = useState(false);
  const [commentDeleted, setCommentDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const {
    user: { username },
  } = useContext(UserContext);

  const handleCommentFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    postNewComment(article_id, username, commentInput)
      .then(() => {
        setCommentInput("");
        setCommentPosted(true);
        setIsLoading(false);
        console.log(comments);
      })
      .catch((error) => {
        setError(true);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchArticleComments(article_id)
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
      });
  }, [commentPosted, commentDeleted]);

  if (isLoading) return "Loading...";

  return (
    <div>
      <br></br>
      <form onSubmit={handleCommentFormSubmit}>
        <label htmlFor="newComment">
          <textarea
            name="newComment"
            type="text"
            value={commentInput}
            placeholder="post a new comment..."
            onChange={(e) => setCommentInput(e.target.value)}
            required
          ></textarea>
        </label>
        <button>Submit</button>
      </form>
      <h2>All Comments</h2>
      <ul>
        {comments.map((comment, comment_id) => {
          return (
            <div className="comment_list" key={comment_id}>
              <li>
                <CommentCard
                  comment={comment}
                  setCommentDeleted={setCommentDeleted}
                />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
