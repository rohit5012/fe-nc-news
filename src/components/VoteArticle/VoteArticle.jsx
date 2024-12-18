import { useState, useEffect } from "react";
import { updateArticleVotes } from "../../api";
import { Button } from "react-bootstrap";
import { Badge } from "react-bootstrap";

const VoteArticle = ({ votes, article_id }) => {
  const [presentVotes, setPresentVotes] = useState(votes);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setPresentVotes(votes);
  }, [votes]);

  const handleNewVote = () => {
    updateArticleVotes(article_id, 1).catch(() => {
      setPresentVotes((currentVotes) => currentVotes - 1);
    });
    setPresentVotes((currentVotes) => currentVotes + 1);
  };

  const handleRemoveVote = () => {
    updateArticleVotes(article_id, 1).catch(() => {
      setPresentVotes((currentVotes) => currentVotes + 1);
    });
    setPresentVotes((currentVotes) => currentVotes - 1);
  };

  if (isError) {
    return <p>Your vote was not successful. Please try again!</p>;
  }
  return (
    <div>
      <section>
        <span>Vote : </span>
        <Button onClick={handleNewVote}>+</Button>
        <Badge style={{ width: "2rem", color: "blue" }}>{presentVotes}</Badge>
        <Button onClick={handleRemoveVote}>-</Button>
      </section>
    </div>
  );
};

export default VoteArticle;
