import "../Styling/ArticleCard.css";
import Header from "../Components/Header";
import ArticleMap from "../Components/ArticleMap";
import { useEffect, useState } from "react";
import { getArticles } from "../Components/api";
import SortBar from "../Components/SortBar";
import { useParams } from "react-router-dom";

export default function ArticlesCards() {
  const [loading, setLoading] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true);
    getArticles()
      .then((response) => {
        setArticles(response.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setArticles]);

  useEffect(() => {

  } , [articles])

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {loading ? (<Header HeaderText={`Loading...`}/>) : (<Header HeaderText={'All Articles'}/>)}
          {loading ? (<Header HeaderText={`Loading...`}/>) : (<ArticleMap articles={articles} loading={loading} />)}
        </>
      )}
    </>
  );
}
