import NavBarLink from '../../../../routes/NavBarLink';
import { MenuItem } from '@mui/material';

const MenuLink = ({ label, navigateTo, onClick, styles }) => {
    return (
        <NavBarLink to={navigateTo} color='black'>
            <MenuItem sx={{...styles}} onClick={onClick}>
                {label}
            </MenuItem>
        </NavBarLink>
    );
};

export default MenuLink;