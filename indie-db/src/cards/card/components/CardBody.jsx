import { CardContent, CardHeader, Typography, Box, Divider } from "@mui/material";

const CardBody = ({ card }) => {
    const { title, subtitle, phone, address, bizNumber } = card;
    const { street, houseNumber, city } = address;

    return (
        <CardContent>
            <CardHeader title={title} subheader={subtitle} sx={{
                p: 0,
                mb: 1,
            }} />
            <Divider />
            <Box mt={1}>
                <Typography variant="body2" color="text.secondary">
                    <Typography variant="subtitle1" component="strong">
                        Phone:{" "}
                    </Typography>
                    {phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Address: </strong>
                    {street} {houseNumber} {city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Card Number: </strong> {bizNumber}
                </Typography>
            </Box>
        </CardContent>
    );
};

export default CardBody;