import '../Styling/SortBar.css'
import { useState, useEffect } from "react";
import { getArticles } from "./api";

export default function SortBar( {topic , setArticles}) {
  const [loading , setLoading] = useState(true)
  const [pagePath , setPagePath] = useState('')
  const allArticleRegex = /^.*\/articles(?:\/)?$/



  useEffect(() => {
    if(allArticleRegex.test(window.location.href)){
      setPagePath('allArticles')
    }
  } , [])

  const handleSelection = (event) => {
    event.preventDefault()
    const selection = event.target.value;
    
    switch (selection){
      case 'CreationDateAsc':
        setLoading(true)
        getArticles(`?topic=${topic}&sorted=Asc`)
        .then((response) => {
          console.log(response.articles , 'RESPONSE ARTICLES')
          setArticles(response.articles)
          setLoading(false)
    })
        .catch((err) => {
          console.log(err)
        })
      break;
      case 'CreationDateDesc':
        setLoading(true)
        getArticles(`?topic=${topic}&sorted=Desc`)
        .then((response) => {
          console.log(response.articles , 'RESPONSE ARTICLES')
          setArticles(response.articles)
          setLoading(false)
    })
        .catch((err) => {
          console.log(err)
        })
      break;

    }
  }
  
  return (
    <>
    <div id="SortBarContainer">
      <ul>
        <li>Sort Articles By : </li>
        <li id='DropDown'>
        <select name="SortOptionSelector" id="SortOptionSelector" onChange={(e) => handleSelection(e)}>
          <option value="" disabled>Sort Options</option>
          <option value="CreationDateAsc">CreationDate - Asc</option>
          <option value="CreationDateDesc">CreationDate - Desc</option>
      </select>
        </li>
      </ul>
    </div>
    </>
  );
}
