import Card from '@mui/material/Card';
import CardTitle from './components/CardTitle';
import CardDisplay from './components/CardDisplay';
import CardActionBar from './components/CardActionBar';
import CardTeam from './components/CardTeam';
import { Chip, Divider } from '@mui/material';
import CardGames from './components/CardGames';
import CardShops from './components/CardShops';
import { cardData } from '../../../../utils/initData/initData';

const MyCard = ({ card }) => {
    return (
    <Card sx={{ width: 300, mt: 2, ml: 2 }}>
        <CardDisplay image={card.image}/>
        <CardTitle name={card.name} location={cardData.location}/>
        <Divider><Chip label='Team:'/></Divider>
        <CardTeam team={ card.team}/>
        <Divider><Chip label='Titles:'/></Divider>
        <CardGames titles={ card.titles } />
        <Divider><Chip label='Shop Front:'/></Divider>
        <CardShops links={ card.links }/>
        <CardActionBar/>
    </Card>
    );
};

export default MyCard;