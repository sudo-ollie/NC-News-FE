export default function VoteSuccess({ voteSuccess }) {
    let votePrompt;
    if(voteSuccess === true){
        votePrompt = 'Vote Successfully Cast'
        return votePrompt
    }
    else if (voteSuccess === false){
        votePrompt = 'Vote Failed, Try Again'
        return votePrompt
    }

  return (
    <>
        <h2>{votePrompt}</h2>
    </>
  );
}
