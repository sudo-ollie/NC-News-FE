import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../Components/api";
import Header from "../Components/Header";
import ArticleMap from '../Components/ArticleMap'
import SortBar from "../Components/SortBar";

export default function TopicPage() {
  const { topic } = useParams();
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState({});

  useEffect(() => {
    if (topic) {
      getArticles(`?topic=${topic}`).then((response) => {
        setArticles(response.articles);
        setLoading(false);
      });
    }
  }, [topic]);

  useEffect(() => {
    console.log('ARTICLES HAVE CHANGED')
  } , [articles])

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Header HeaderText={`${topic} articles`} />
          <SortBar topic={topic} setArticles={setArticles}/>
          <ArticleMap articles={articles} loading={loading} />
        </>
      )}
    </>
  );
}
