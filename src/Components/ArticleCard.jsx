import '../Styling/ArticleCard.css'

export default function ArticleCard({ article }) {

  return (
    <>
      <div className="ArticleCardInside">
        <div>
          <h2 id="articleCardTitle">{article.title}</h2>
        </div>
        <img
          id="articleCardImg"
          src={article.article_img_url}
          alt="Thumbnail image that accompanies the article, often the same theme as the article"
        />
        <div className="TopicAndAuthor">
          <div>
            <h3>
              Topic: {article.topic} | Author: {article.author}{" "}
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}
