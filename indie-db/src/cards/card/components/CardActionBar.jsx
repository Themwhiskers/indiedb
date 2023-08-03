import { Box, CardActions, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardActionBar = ({ cardID, handleDeleteCard }) => {
    return (
        <>
        <CardActions disableSpacing sx={{
            paddingTop: 0,
            justifyContent: 'space-between'
        }}>
            <Box>
                <IconButton onClick={
                    () => handleDeleteCard(cardID)
                }>
                    <DeleteIcon/>
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
                    <FavoriteIcon/>
                </IconButton>
            </Box>
        </CardActions>
        </>
    );
};

export default CardActionBar;
