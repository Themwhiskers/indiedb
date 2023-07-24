import MyCard from "../../cards/components/card/Card";
import Paper from '@mui/material/Paper';

const Main = () => {
    return(
    <Paper sx={{
        minHeight: '90vh',
        backgroundColor:'#D9D9D9'
    }}>
        <MyCard/>
    </Paper>
    );
};

export default Main;