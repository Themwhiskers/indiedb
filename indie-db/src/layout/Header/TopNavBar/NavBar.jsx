import { AppBar, Toolbar } from "@mui/material";
import { MenuProvider } from "./menu/MenuProvider";
import LeftNavBar from '../TopNavBar/left-nav/LeftNavBar';

const NavBar = () => {
    return (
        <MenuProvider>
            <AppBar position='sticky'>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <LeftNavBar/>
                </Toolbar>
            </AppBar>
        </MenuProvider>
    );    
};

export default NavBar;