import { Link } from 'react-router-dom'

export default function Button({ buttonText }) {

    return (
        <Link to='/allArticles'>
            <button>{buttonText}</button>
        </Link>

    )
}