import { Route, Routes } from 'react-router-dom';
import ROUTES from './routesModel';
import CardsPage from '../cards/pages/CardsPage';
import Home from '../pages/Home';
import About from '../pages/AboutPage';
import Error from '../pages/ErrorPage';
import SignUpPage from '../users/pages/SignUpPage';
import LoginPage from '../users/pages/LoginPage';
import CardDetailPage from '../cards/pages/CardDetailPage';
import FavCardsPage from '../cards/pages/FavCardsPage';

const Router = () => {
    return (
    <Routes>
        <Route path={ROUTES.ROOT} element={<Home/>}/>
        <Route path={ROUTES.ABOUT} element={<About/>}/>
        <Route path={ROUTES.CARDS} element={<CardsPage/>}/>
        <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
        <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailPage/>}/>
        <Route path={ROUTES.SIGNUP} element={<SignUpPage/>}/>
        <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
        <Route path={'*'} element={<Error/>}/>
    </Routes>
    );
};

export default Router;