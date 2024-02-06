import Comments from "./Comments";

export default function SingleArticle({ article }) {
  const { article_id } = article;
  return (
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
        <h3>Article Votes : {article.votes}</h3>
        <div>
          <h2>Comments</h2>
          <div>
            <Comments article_id={article_id} />
          </div>
        </div>
    </>
  );
}
