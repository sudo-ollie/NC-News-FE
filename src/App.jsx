import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ArticlesCards from "./Pages/ArticlesCards";
import ArticlePage from "./Pages/ArticlePage";
import NavBar from "./Components/NavBar";
import TopicPage from "./Pages/TopicPage";

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage  />} />
          <Route path="/articles" element={<ArticlesCards />}/>
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/articles/topics/:topic" element={<TopicPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
