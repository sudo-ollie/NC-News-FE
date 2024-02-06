import { Link } from 'react-router-dom'

export default function Button({ buttonText , linkTo }) {

    return (
        <Link to={linkTo}>
            <button>{buttonText}</button>
        </Link>

    )
}