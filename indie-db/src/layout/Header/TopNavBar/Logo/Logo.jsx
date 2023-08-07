import { Typography } from "@mui/material";
import NavBarLink from "../../../../routes/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

const Logo = () => {
    return (
        <NavBarLink to={ROUTES.CARDS} sx={{ color: '#fff' }}>
            <Typography variant='h4'>LOGO</Typography>
        </NavBarLink>
    );
};

export default Logo;