import { useEffect, useState } from "react";
import { getComments } from "./api";

import "../Styling/Accordion.css";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    getComments(article_id)
      .then((response) => {
        setComments(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  const expandAccordion = () => {
    setShown(!shown);
  };

  return (
    <>
      <div className="Accordion">
        <div className="AccordionTitle" onClick={expandAccordion}>
          <div>{ shown ? "Click To Hide Comments" : "Click To Show Comments"}</div>
        </div>
        {shown && (
          <div className="AccordionContent">
            <div className="CommentContainerInternal">
            {comments && comments.map((comment , index) => (
                <>
                <div key={index} id="CommentContainer">
                    <div>
                        Comment Author : {comment.author} | Created At : {comment.created_at}
                    </div>
                    <p>
                        {comment.body}
                    </p>
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

