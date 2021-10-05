import LandingPage from '../components/pages/LandingPage';
import SearchPage from '../components/pages/SearchPage';

export const routes = {
    LANDING_PAGE: '/',
    SEARCH_PAGE: '/search'
}

export const navRoutes = [
    {
        path: routes.LANDING_PAGE,
        component: LandingPage,
        exact: true,
        name: "Home"
    },
    {
        path: routes.SEARCH_PAGE,
        component: SearchPage,
        exact: true,
        name: "Search"
    }
]