const CommentCard = ({ comment }) => {
  return (
    <div>
      <p>
        Author: {comment.author}
        <span> | Votes: {comment.votes}</span>
      </p>
      <p>
        <i>Description: {comment.body}</i>
      </p>
    </div>
  );
};

export default CommentCard;
