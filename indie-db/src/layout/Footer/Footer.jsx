import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

const Footer = () => {
    
    const navigate = useNavigate();
    const navigateTo = to => navigate(to);
    {/*const {user} = useUser();*/}
    
    return (
        <Paper sx={{
            position: 'sticky', bottom: 0, left: 0, right: 0
        }}>
            <BottomNavigation showLabels>
                <BottomNavigationAction
                    label='About'
                    icon={<InfoIcon/>}
                    onClick={() => navigateTo(ROUTES.ABOUT)}
                />

                {/* <BottomNavigationAction
                    label='Favorites'
                    icon={<FavoriteIcon/>}
                    onClick={() => navigateTo(ROUTES.FAV_CARDS)} /> */}
            </BottomNavigation>

        </Paper>
    );
};

export default Footer;