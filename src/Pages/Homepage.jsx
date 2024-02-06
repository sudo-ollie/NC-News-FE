import Header from '../Components/Header'
import '../Styling/ArticleCard.css'
import Button from '../Components/Button'
import NavBar from '../Components/NavBar'

export default function Homepage({ articles }) {

    return (
        <>
        <NavBar />
        <Header HeaderText={'NC News FE'}/>
        <Button buttonText={'View All Articles'} linkTo={'/allArticles'} />
        </>
    )
}

