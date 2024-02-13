import Header from "../Components/Header";
import { getArticle } from "../Components/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleArticle from "../Components/SingleArticle";
import SortBar from "../Components/SortBar";

export default function ArticlePage() {
  const [article, setArticle] = useState("");
  const [loading , setLoading] = useState(true)

  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id)
      .then((response) => {
        setArticle(response);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  return (
    <>
      {loading ? (<Header HeaderText={`Loading...`}/>) : (<Header HeaderText={`${article.title}`}/>)}
      <SingleArticle article={article} />
    </>
  );
}
