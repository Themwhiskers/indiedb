import { Box, Button } from "@mui/material";

const CardShops = () => {
    return (
        <Box display='flex' justifyContent='space-evenly'>
            <Button href='https://store.steampowered.com/developer/supergiantgames'>Steam</Button>
            <Button href='https://www.gog.com/en/games?developers=supergiant-games'>GOG</Button>
            <Button href='https://www.supergiantgames.com/'>Site</Button>
        </Box>
    );
};

export default CardShops;