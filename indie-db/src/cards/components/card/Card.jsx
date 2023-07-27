import Card from '@mui/material/Card';
import CardTitle from './components/CardTitle';
import CardDisplay from './components/CardDisplay';
import CardActionBar from './components/CardActionBar';
import CardTeam from './components/CardTeam';
import { Chip, Divider } from '@mui/material';
import CardGames from './components/CardGames';
import CardShops from './components/CardShops';
import { cardData } from '../../../../utils/initData/initData';

const MyCard = () => {
    return (
    <Card sx={{width: 300}}>
        <CardDisplay image={cardData.image}/>
        <CardTitle name={cardData.name} location={cardData.location}/>
        <Divider><Chip label='Team:'/></Divider>
        <CardTeam team={ cardData.team}/>
        <Divider><Chip label='Titles:'/></Divider>
        <CardGames/>
        <Divider><Chip label='Shop Front:'/></Divider>
        <CardShops/>
        <CardActionBar/>
    </Card>
    );
};

export default MyCard;