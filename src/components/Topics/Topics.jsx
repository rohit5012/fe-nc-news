import { useState, useEffect } from "react";
import "./Topics.css";
import { fetchTopicList } from "../../api";
import TopicCard from "../TopicCard/TopicCard";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchTopicList()
      .then((topics) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return "Loading...";
  if (isError) {
    return <p>Error</p>;
  }

  return (
    <ul>
      {topics.map((topic) => {
        return <TopicCard key={topic.slug} topic={topic} />;
      })}
    </ul>
  );
};

export default Topics;
