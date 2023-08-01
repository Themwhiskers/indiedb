import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { Container } from '@mui/material';

const SignUpPage = () => {
    const user = null;
    
    if(user) return <Navigate replace to={ROUTES.CARDS}/>

    return(
        <Container >
            {/*PageHeader*/}
            <h1>signup placeholder</h1>
        </Container>
    );
};

export default SignUpPage;