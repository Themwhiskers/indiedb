import { Box, Button } from "@mui/material";

const CardShops = ({ links }) => {
    const { steam, gog, site } = links;
    return (
        <Box display='flex' justifyContent='space-evenly'>
            <Button href={ steam }>Steam</Button>
            <Button href={ gog }>GOG</Button>
            <Button href={ site }>Site</Button>
        </Box>
    );
};

export default CardShops;