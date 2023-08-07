import { IconButton, Avatar } from '@mui/material';
import ROUTES from '../../../../routes/routesModel';
import NavBarLink from '../../../../routes/NavBarLink';

const LogoIcon = () => {
    return (
        <NavBarLink
            to={ROUTES.CARDS}
            sx={{ color: '#fff'}}>
            <IconButton
                sx={{ display: { xs: 'inline-flex', md: 'none'}}}
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'>
                <Avatar
                alt='Indie DB icon'
                src=''/>
            </IconButton>
        </NavBarLink>
    );
};

export default LogoIcon;