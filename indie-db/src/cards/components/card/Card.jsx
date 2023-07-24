import CardBody from './components/CardBody';
import Card from '@mui/material/Card';
import CardTitle from './components/CardTitle';
import CardDisplay from './components/CardDisplay';

const MyCard = () => {
    return (
    <Card sx={{width: 300}}>
        <CardDisplay/>
        <CardTitle/>
        <CardBody/>
    </Card>
    );
};

export default MyCard;