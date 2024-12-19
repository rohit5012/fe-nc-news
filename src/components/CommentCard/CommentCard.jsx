import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { deleteComment } from "../../api";
import "./CommentCard.css";

const CommentCard = ({ comment, setCommentDeleted }) => {
  const {
    user: { username },
  } = useContext(UserContext);

  const handleCommentDelete = () => {
    deleteComment(comment.comment_id).then(() => {
      setCommentDeleted(true);
    });
    setCommentDeleted(false);
  };

  return (
    <section className="comment-card">
      <p>
        Author: {comment.author}
        <span> | Votes: {comment.votes}</span>
      </p>
      <p>
        <i>Description: {comment.body}</i>
      </p>
      <div>
        {username === comment.author ? (
          <button onClick={handleCommentDelete}>X</button>
        ) : null}
      </div>
    </section>
  );
};

export default CommentCard;
