import Paper from '@mui/material/Paper';
import CardsPage from '../../cards/pages/CardsPage';

const Main = ({children}) => {
    return(
    <Paper sx={{
        minHeight: '90vh',
        backgroundColor:'#D9D9D9'
    }}>
        {children}
    </Paper>
    );
};

export default Main;