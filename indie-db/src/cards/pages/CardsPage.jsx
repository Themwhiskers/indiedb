import { Container } from "@mui/material";
import Cards from '../components/card/components/Cards';
import { cardData as cards } from '../../../utils/initData/initData';

const CardsPage = () => {
    return (
        <Container>
            {/*PageHeader*/}
            <Cards cards={cards}/>
        </Container>
    );
};

export default CardsPage;