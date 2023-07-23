import { lightBG } from "../../../utils/UIelements/colors";
import { Paper } from '@mui/material';
const Main = () => {
    return (
        <Paper sx={{
            minHeight: '90vh',
            backgroundColor: lightBG
        }}>
            <p>Hello World!</p>
        </Paper>
    );
};

export default Main;