import { CardContent, Typography } from "@mui/material";

const CardTeam = ({ team }) => {

    const { founders, devTeam, artTeam, composer } = team;

    return (
    <CardContent>
        <Typography><strong>Founders:</strong> { founders }</Typography>
        <Typography><strong>Dev Team:</strong> { devTeam }</Typography>
        <Typography><strong>Art By:</strong> { artTeam }</Typography>
        <Typography><strong>Original Music:</strong> { composer }</Typography>
    </CardContent>
    );
};

export default CardTeam;