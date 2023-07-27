import { Box, CardHeader } from '@mui/material';

const CardTitle = ({ name, location }) => {

    return (
        <Box>
            <CardHeader title={ name } subheader={ location }/>
        </Box>
    );
};

export default CardTitle;