import { useEffect, useState } from "react";
import Comments from "./Comments";
import "../Styling/SingleArticle.css";
import { editVotes, getArticle } from "./api"; 
import VoteSuccess from "./VoteSuccess";
import { useParams } from "react-router-dom";

export default function SingleArticle() {
  const [vote, setVote] = useState(0);
  const [localVote , setLocalVote] = useState(vote)
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [voteSuccess, setVoteSuccess] = useState(undefined);
  const { article_id } = useParams();


  useEffect(() => {
    if (article_id) {
      getArticle(article_id).then((response) => {
        setArticle(response);
        setVote(response.votes);
        setLoading(false);
      });
    }
  }, [article_id]);



  const onClick = (article_id, param) => (event) => {
    setLocalVote((currentVotes) => {
      return currentVotes + Number(param);
    });
    editVotes(article_id, { inc_votes: param }).then((response) => {
      if (response.status === 200) {
        setVote(response.data.updated_article.votes);
        document.getElementById("Up").disabled = true;
        document.getElementById("Down").disabled = true;
        setVoteSuccess(true);
      } else {
        setVoteSuccess(false);
      }
    });
  };

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <img
            src={article.article_img_url}
            alt="Article Image - A large image at the top of the article to accompany the text"
          />
          <p>{article.body}</p>
          <h3>
            Author : {article.author} | Topic : {article.topic} | Created On :{" "}
            {article.created_at}
          </h3>
          <div>
            <h3>Article Votes : {localVote}</h3>
            <div id="VoteSuccessDisplay">
              <VoteSuccess voteSuccess={voteSuccess} />
            </div>
            <button id="Up" onClick={onClick(article_id, 1)}>
              <img
                src="https://static-00.iconduck.com/assets.00/thumbs-up-emoji-emoji-1828x2048-3iipr9gp.png"
                alt="Thumbs up emoji for casting article votes"
              />
            </button>
            <button id="Down" onClick={onClick(article_id, -1)}>
              <img
                src="https://static-00.iconduck.com/assets.00/thumbs-down-emoji-emoji-457x512-ygbar5af.png"
                alt="Thumbs down emoji for casting article votes"
              />
            </button>
          </div>
          <div>
            <h2>Comments</h2>
            <div>
              <Comments article_id={article_id} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
