import { lightCardBG } from "../../../../utils/UIelements/colors";
import CardHead from "./CardHead";
import MuiCard from '@mui/material/Card';
const Card = () => {
    <MuiCard sx={{ minWidth: 280, maxWidth: 350, backgroundColor: lightCardBG}}>
        <CardHead/>
    </MuiCard>
};

export default Card;