import { useState, useEffect } from 'react'
import './App.css'
import { Route , Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import { getArticles } from './Components/api';
import ArticlesCards from './Components/AllArticles';

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
      </Routes>
    </div>
    </>
  )
}

export default App
