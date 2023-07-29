import { cardData as cards } from '../../../utils/initData/initData';
import Paper from '@mui/material/Paper';
import Cards from '../../cards/components/card/pages/Cards';

const Main = () => {
    return(
    <Paper sx={{
        minHeight: '90vh',
        backgroundColor:'#D9D9D9'
    }}>
        <Cards cards={cards} />
    </Paper>
    );
};

export default Main;