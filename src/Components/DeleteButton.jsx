import { useEffect, useState } from "react";
import { deleteComment, getComments } from "./api";

export default function Button({
  buttonText,
  comment_id,
  comments,
  setComments,
  article_id,
}) {
  const [lastDeleted , setLastDeleted] = useState('')
  const [deleteError , setDeleteError] = useState(false)

  useEffect(() => {
    setLastDeleted('')
  }, [])

  const handleDeleteComment = (event) => {
    event.preventDefault();
    console.log(lastDeleted , 'lastDeleted')
    console.log(comment_id !== lastDeleted , 'Logic')
    if(comment_id !== lastDeleted){
      setLastDeleted(comment_id)
      deleteComment(comment_id)
      .then((response) => {
        console.log(response)
        if (response.status === 204) {
          getComments(article_id)
            .then((response) => {
              setComments(response)
            })
        }
      })
      .catch((error) => {
        console.error("Error deleting comment:", error)
      })
    }
    else {
      setDeleteError(true)
    }
  }

  return (
    <>
      {deleteError === false 
      ? (<button onClick={handleDeleteComment}>{buttonText}</button>) 
      : (<button onClick={handleDeleteComment}>Error, try again</button>)}
    </>
  );
}
