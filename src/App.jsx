import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import { getArticles } from "./Components/api";
import ArticlesCards from "./Pages/AllArticles";
import ArticlePage from "./Pages/ArticlePage";
import NavBar from "./Components/NavBar";
import TopicPage from "./Components/TopicPage";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((response) => {
        setArticles(response.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setArticles]);

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage articles={articles} />} />
          <Route
            path="/articles"
            element={<ArticlesCards articles={articles} />}
          />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/articles/topics/:topic" element={<TopicPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
