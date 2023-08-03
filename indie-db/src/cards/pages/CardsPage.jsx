import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../CardsFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {

    const {cards, error, isPending, handleGetCards } = useCards();

    useEffect(() => { handleGetCards(); }, []);

    const onDeleteCard = (cardId) => console.log(`Delete card:${cardId}`);

    return (
        <Container>
            <PageHeader title='Cards page' subtitle='Here you can browse through all the business cards available'/>
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={cards}
                onDelete={onDeleteCard}
                />
        </Container>
    );
};

export default CardsPage;