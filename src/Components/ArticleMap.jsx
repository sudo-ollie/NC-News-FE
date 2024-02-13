import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";

export default function ArticleMap({ articles, loading }) {
  const navigate = useNavigate();

  const handleRedirect = (event, article_id) => {
    event.preventDefault();
    navigate(`/articles/${article_id}`);
  };

  return (
    <div>
      {loading ? (
        <p>Loading articles...</p>
      ) : (
        articles &&
        articles.map((article, index) => (
          <Link key={index} to={`/articles/${article.article_id}`}>
            <div onClick={(event) => handleRedirect(event, article.article_id)}>
              <ArticleCard article={article} />
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
