import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function ArticleMap({ articles }) {
    const navigate = useNavigate();
  
    const handleClick = (article_id) => (e) => {
      e.preventDefault();
      const path = `/articles/${article_id}`;
      navigate(path);
    };

    return (
      <div>
        {articles && articles.articles.map((article, index) => (
            <button key={index} id="ArticleCard" onClick={handleClick(article.article_id)}>
              <div className="ArticleCardInside">
                <div>
                  <h2 id="articleCardTitle">{article.title}</h2>
                </div>
                <img
                  id="articleCardImg"
                  src={article.article_img_url}
                  alt="Thumbnail image that accompanies the article, often the same theme as the article"
                />
                <div className="TopicAndAuthor">
                  <div><h3>Topic: {article.topic} | Author: {article.author} </h3></div>
                </div>
              </div>
            </button>
          ))}
      </div>
    );
  }
  