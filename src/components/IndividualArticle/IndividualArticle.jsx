import "./IndividualArticle.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../../api";

const IndividualArticle = () => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    fetchSingleArticle(article_id).then((data) => {
      console.log(data);
      return data;
    });
  }, [article_id]);

  return <div></div>;
};

export default IndividualArticle;
