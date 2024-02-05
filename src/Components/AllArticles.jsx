import '../Styling/ArticleCard.css'

export default function ArticlesCards({ articles }) {

    console.log(articles , 'ARTICLES')

    return (
        <>
        {articles && articles.articles.map((article , index) => {
            return (
                <div key={index} className='ArticleCard'>
                    <h2 id='articleCardTitle'>{article.title}</h2>
                    <img src={article.article_img_url} alt="Article Image" />
                    <div className='TopicAndAuthor'>
                        <h3 id='articleCardTopic'> Topic : {article.topic}</h3>
                        <h3 id='authorCardTopic'> Author : {article.author}</h3>
                    </div>
                </div>
            )
        })}
        </>
    )
}