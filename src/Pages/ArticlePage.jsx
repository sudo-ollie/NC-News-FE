import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import { getArticle } from "../Components/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleArticle from "../Components/SingleArticle";

export default function ArticlePage() {
  const [article, setArticle] = useState("");

  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id)
      .then((response) => {
        setArticle(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  return (
    <>
      <Header HeaderText={`${article.title}`} />
      <SingleArticle article={article} />
    </>
  );
}

