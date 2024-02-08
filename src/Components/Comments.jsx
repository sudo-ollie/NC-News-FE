import { useEffect, useState } from "react";
import { getComments } from "./api";
import DeleteButton from './DeleteButton'
import "../Styling/Accordion.css";
import { postComment } from "./api";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [shown, setShown] = useState(false);
  const [newComment , setNewComment] = useState('')
  const [buttonDisabled , setButtonDisabled] = useState(false)
  const [commentSuccess , setCommentSuccess] = useState('')

  //This will be changed once I have added profiles & context
  const [userName , setUserName] = useState('tickle122')

  useEffect(() => {
    if(article_id){
      getComments(article_id)
      .then((response) => {
        setComments(response);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [article_id]);


  useEffect(() => {
  } , [comments])

  const expandAccordion = () => {
    setShown(!shown);
  };

  const handleNewComment = (event) => {
    event.preventDefault()
    setNewComment(event.target.value)
  }

  const handleNewCommentSubmit = (event) => {
    event.preventDefault()
    postComment(article_id , {username : userName , body: newComment})
    .then((response) => {
      if(response.status === 200){
      setTimeout(() => {
        setButtonDisabled(true)
      }, 15000)
      getComments(article_id)
      .then((response) => {
        setComments(response)
      })
      setCommentSuccess(true)
    }
    else {
      setCommentSuccess(false)
    }
    })
  }

  return (
    <>
      <div className="Accordion">
        <div className="AccordionTitle" onClick={expandAccordion}>
          <div>{ shown ? "Click To Hide Comments" : "Click To Show Comments"}</div>
        </div>
        {shown && (
          <div className="AccordionContent">
            <div key='CommentKey' className="CommentContainerInternal">
            <div key='NewComment' id="NewCommentContainer">
                    <div>
                      <ul>
                        <li key={'Author'}>Author : 'Logged In Profile'</li>
                        <li key={'Seperator'}>|</li>
                        <li key={'CreatedAt'}>Created At : 'Current Time'</li>
                      </ul>
                    </div>
                    <div>
                    <textarea 
                    name="newCommentInput" 
                    id="newCommentInput" 
                    type='text'
                    cols="30" 
                    rows="10"
                    value={newComment}
                    onChange={handleNewComment}
                    placeholder="Enter Comment"
                    required
                    ></textarea>
                    <button id="CommentButton" disabled={buttonDisabled} onClick={handleNewCommentSubmit}>Post</button>
                    {commentSuccess === '' ? null : commentSuccess ? (<h2>Comment posted</h2>) : (<h2>Comment Failed , retry in 15s</h2>)} 
                    </div>
            </div>
            {comments && comments.map((comment , index) => (
                <>
                <div key={index} id="CommentContainer">
                    <div>
                    <ul>
                        <li>Comment Author : {comment.author}</li>
                        <li>|</li>
                        <li>Created At : {comment.created_at}</li>
                      </ul>
                    </div>
                    <p>
                        {comment.body}
                    </p>
                    {userName === comment.author ? (<DeleteButton onClick={(e) => e.preventDefault()} article_id={article_id} buttonText={'Delete Comment'} comment_id={comment.comment_id} comments={comments} setComments={setComments} />) : (null)}
                </div>
                </>
            ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

