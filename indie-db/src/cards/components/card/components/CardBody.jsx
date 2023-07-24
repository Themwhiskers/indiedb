import { CardContent, Divider, Typography, Chip, Box, Button } from "@mui/material";

const CardBody = () => {
    return (
    <CardContent>
        <Typography><strong>Development:</strong> Christopher Jurney, Gavin Simon, Andrew Wang</Typography>
        <Typography><strong>Art Design:</strong> Jen Zee</Typography>
        <Typography><strong>Original Music:</strong> Darren Korb</Typography>
        <Divider sx={{marginTop: 1, marginBottom: 1 }}>
            <Chip label='Platforms:'/>
        </Divider>
        <Typography>Steam, Xbox360, Xbox One, PlayStation 4</Typography>
        <Divider sx={{marginTop: 1, marginBottom: 1 }}/>
        <Box display='flex' justifyContent='space-around' >
            <Button variant='contained' href='https://store.steampowered.com/app/237930/Transistor/'>Steam</Button>
            <Button variant='contained' href='https://www.gog.com/en/game/transistor'>GOG</Button>
            <Button variant='contained' href='https://store.playstation.com/en-us/product/UP2125-CUSA00502_00-TRANSISTORGAME00'>PSN</Button>
        </Box>
    </CardContent>
    );
};

export default CardBody;