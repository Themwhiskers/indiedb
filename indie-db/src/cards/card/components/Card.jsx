import { CardActionArea, Card as MuiCard } from '@mui/material';
import CardBody from "./CardBody";
import CardHead from './CardHead';
import CardActionBar from './CardActionBar';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModel';

const Card = ({ card, handleDeleteCard }) => {

    const navigate = useNavigate();

    return(
        <MuiCard sx={{
            minWidth: 280,
            maxWidth: 350
        }}>
            <CardActionArea sx={{ p: 2 }}
                onClick={() => {navigate(`${ROUTES.CARD_INFO}/${card._id}`)}}>
                <CardHead image={card.image}/>
                <CardBody card={card}/>
                <CardActionBar
                    cardID={card._id}
                    handleDeleteCard={handleDeleteCard}
                />
            </CardActionArea>
        </MuiCard>
    );
};

export default Card;