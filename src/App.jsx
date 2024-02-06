import { useState, useEffect } from 'react'
import './App.css'
import { Route , Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import { getArticles } from './Components/api';
import ArticlesCards from './Pages/AllArticles';
import ArticlePage from './Pages/ArticlePage';

function App() {
  const [articles , setArticles] = useState()

  useEffect(() => {
    getArticles()
    .then((response) => {
      setArticles(response)
    })
    .catch((err)=>{
      console.log(err);
    })
 }, [setArticles])

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Homepage articles={articles} />} />
        <Route path='/allArticles' element={<ArticlesCards articles={articles} />} />
        <Route path='/articles/:article_id' element={<ArticlePage />} />
      </Routes>
    </div>
    </>
  )
}

export default App
