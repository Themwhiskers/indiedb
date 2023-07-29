import { Box, Chip } from "@mui/material";

const CardGames = ({ titles }) => {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            padding: '1rem'
        }}>
            { titles.map((title) => <Chip key={ title._id } label={ title.name } sx={{ margin: '5px 5px 0' }}/>) }
        </Box>
    );
};

export default CardGames;