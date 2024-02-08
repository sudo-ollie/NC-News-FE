import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
export default function ArticleMap({ articles , loading }) {

  return (
    <div>
      {loading ? (<p>Loading articles...</p>) : (
        articles && articles.articles.map((article, index) => (
          <Link key={index} to={`${article.article_id}`}>
            <ArticleCard article={article} />
          </Link>
        ))
      )}
    </div>
  )
}
