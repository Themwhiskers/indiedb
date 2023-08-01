import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const LoginPage = () => {
    const user = null;

    if(user) return <Navigate replace to={ROUTES.CARDS}/>

    return (
        <Container>
            {/*PageHeader*/}
            <h1>login placeholder</h1>
        </Container>    
    );
};

export default LoginPage;