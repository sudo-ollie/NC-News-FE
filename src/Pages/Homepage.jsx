import Header from '../Components/Header'
import '../Styling/ArticleCard.css'
import Button from '../Components/Button'

export default function Homepage({ articles }) {

    return (
        <>
        <Header HeaderText={'NC News FE'}/>
        <Button buttonText={'View All Articles'} linkTo={'/articles'} />
        </>
    )
}

