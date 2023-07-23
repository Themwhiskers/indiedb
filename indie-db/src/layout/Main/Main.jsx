import { lightBG } from "../../../utils/UIelements/colors";
import { Paper } from '@mui/material';
import Card from '../../cards/components/card/Card'
const Main = () => {
    return (
        <Paper sx={{
            minHeight: '90vh',
            backgroundColor: lightBG
        }}>
            <Card/>
        </Paper>
    );
};

export default Main;