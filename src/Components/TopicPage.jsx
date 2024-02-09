import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "./api";
import Header from "./Header";
import ArticleMap from './ArticleMap'

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

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Header HeaderText={`${topic} articles`} />
          <ArticleMap articles={articles} loading={loading} />
        </>
      )}
    </>
  );
}
