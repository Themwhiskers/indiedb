import { Box, IconButton } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CardActionBar = () => {
    return (
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Box>
                <IconButton>
                    <DeleteOutlineIcon/>
                </IconButton>
                <IconButton>
                    <EditIcon/>
                </IconButton>
            </Box>
            <Box>
                <IconButton>
                    <CallIcon/>
                </IconButton>
                <IconButton>
                    <FavoriteBorderIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};

export default CardActionBar;