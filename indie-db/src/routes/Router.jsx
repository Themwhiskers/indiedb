import { Route, Routes } from 'react-router-dom';
import ROUTES from './routesModel';
import CardsPage from '../cards/pages/CardsPage';
import Home from '../pages/Home';
import About from '../pages/AboutPage';
import Error from '../pages/ErrorPage';

const Router = () => {
    return (
    <Routes>
        <Route path={ROUTES.ROOT} element={<Home/>}/>
        <Route path={ROUTES.ABOUT} element={<About/>}/>
        <Route path={ROUTES.CARDS} element={<CardsPage/>}/>

        <Route path={'*'} element={<Error/>}/>
    </Routes>
    );
};

export default Router;