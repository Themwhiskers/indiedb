import { Container, Grid, Typography } from "@mui/material";
import BugReportIcon from '@mui/icons-material/BugReport';

const Error = ({errorMessage}) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Typography variant='body2' component='strong'>
                    It appears something went wrong: {errorMessage}
                </Typography>
            </Grid>
            <BugReportIcon color='error'/>
        </Container>
    );
};

export default Error;