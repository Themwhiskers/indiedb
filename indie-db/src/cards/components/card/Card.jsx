import CardBody from './components/CardBody';
import Card from '@mui/material/Card';
import CardTitle from './components/CardTitle';
import CardDisplay from './components/CardDisplay';
import CardActionBar from './components/CardActionBar';

const MyCard = () => {
    return (
    <Card sx={{width: 300}}>
        <CardDisplay/>
        <CardTitle/>
        <CardBody/>
        <CardActionBar/>
    </Card>
    );
};

export default MyCard;