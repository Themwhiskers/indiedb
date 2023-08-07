import { Button, Typography } from "@mui/material";
import NavBarLink from "./NavBarLink";


const NavItem = ({ label, to, color }) => {
    return (
        <NavBarLink to={to} color={color}>
            <Button color='inherit'>
                <Typography>{label}</Typography>
            </Button>
        </NavBarLink>
    );
};

export default NavItem;