import { Box, IconButton } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TwitterIcon from '@mui/icons-material/Twitter';

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
                    <TwitterIcon/>
                </IconButton>
                <IconButton>
                    <FavoriteBorderIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};

export default CardActionBar;