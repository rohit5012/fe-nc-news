import { Link } from "react-router";

const TopicCard = ({ topic }) => {
  return (
    <section>
      <Link to={`/articles?topic=${topic.slug}`}>
        <h4>{topic.slug}</h4>
      </Link>
    </section>
  );
};

export default TopicCard;
