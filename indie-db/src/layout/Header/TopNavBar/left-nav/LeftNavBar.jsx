import { Box } from "@mui/material";
import { useUser } from "../../../../users/providers/UserProvider"
import LogoIcon from '../Logo/LogoIcon';
import Logo from '../Logo/Logo';
import ROUTES from "../../../../routes/routesModel";
import NavItem from "../../../../routes/NavItem";

const LeftNavBar = () => {
    const { user } = useUser();

    return (
        <Box>
            <LogoIcon />
            <Logo />
            <Box sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
                <NavItem to={ROUTES.ABOUT} label="about" />
                {user?.isBusiness && (
                    <>
                    <NavItem to={ROUTES.MY_CARDS} label="My Cards" />
                    <NavItem to={ROUTES.FAV_CARDS} label="Fav Cards" />
                    </>
                )}
            </Box>
        </Box>
    );
};

export default LeftNavBar;