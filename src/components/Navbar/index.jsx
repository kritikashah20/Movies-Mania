import { useState } from 'react';

// style
import './Navbar.css'

// constant
import { navRoutes } from '../../constants/routes';

const Navbar = () => {

    const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a className="navbar-logo"
                        href={navRoutes[0].path}>
                        MovieMania
                    </a>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        {navRoutes.map((route, routeIdx) => (
                            <li className="nav-item">
                                <a
                                    key={routeIdx}
                                    href={route.path}
                                    className="nav-links"
                                >
                                    {route.name}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
