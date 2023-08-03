import { Card as MuiCard } from '@mui/material';
import CardBody from "./CardBody";
import CardHead from './CardHead';
import CardActionBar from './CardActionBar';

const Card = ({ card, handleDeleteCard }) => {
    return(
        <MuiCard sx={{
            minWidth: 280,
            maxWidth: 350
        }}>
            <CardHead image={card.image}/>
            <CardBody card={card}/>
            <CardActionBar
                cardID={card._id}
                handleDeleteCard={handleDeleteCard}
            />
        </MuiCard>
    );
};

export default Card;