import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getCards } from '../services/cardApiService'
import Cards from '../Cards';
import PageHeader from "../../components/PageHeader";
import Spinner from '../../components/Spinner';
import Error from "../../components/Error";

const CardsPage = () => {

    const [ cards, setCards ] = useState();
    const [ error, setError ] = useState(null);
    const [ isPending, setPending ] = useState(false);

    useEffect(() => {
        setPending(true);
        getCards()
            .then((data) => {
                setCards(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setPending(false);
            })
            }, []);

    return (
        <Container>
            <PageHeader title='Cards page' subtitle='Here you can browse through all the business cards available'/>
            {isPending && <Spinner />}
            {error && <Error errorMessage={error}/>}
            {cards && !cards.length && <p>It appears we don't have what you're looking for..</p>}
            {cards && !!cards.length && <Cards cards={cards}/>}
        </Container>
    );
};

export default CardsPage;