import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 Page Not Found!</h1>
            <NavLink to='/'> Go Back to Home</NavLink>
        </div>
    )
}

export default NotFoundPage
