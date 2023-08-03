import { Divider, Typography, Box } from "@mui/material";

const PageHeader = ({ title, subtitle }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            pt: 6, pb: 6
        }}>
            <Typography variant='h3' component='h1'>{title}</Typography>
            <Divider sx={{ mt: 1, mb: 1 }} />
            <Typography variant='h5' component='h3'>{subtitle}</Typography>
        </Box>
    );
};

export default PageHeader;