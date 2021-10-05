import { navRoutes } from '../../constants/routes';

const Navbar = () => {
    return (
        <header id='navbar'>
            <a
                href={navRoutes[0].path}>
                MovieMania
            </a>
            <nav className='navbar-main'>
                {navRoutes.map((route, routeIdx) => (
                    <a
                        key={routeIdx}
                        href={route.path}>
                        {route.name}
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default Navbar
