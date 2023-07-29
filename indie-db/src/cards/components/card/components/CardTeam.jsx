import { CardContent, Typography } from "@mui/material";

const CardTeam = ({ team }) => {

    const { founders, devTeam, artTeam, composer } = team;
   1 const populate = ( department ) => department.map((member) => ' ' + member + ', ');

    return (
    <CardContent>
        <Typography><strong>Founders:</strong>{ populate(founders) }</Typography>
        <Typography><strong>Dev Team:</strong>{ populate(devTeam) }</Typography>
        <Typography><strong>Art By:</strong>{ populate(artTeam) }</Typography>
        <Typography><strong>Original Music:</strong> { populate(composer) }</Typography>
    </CardContent>
    );
};

export default CardTeam;