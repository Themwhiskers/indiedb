import { useState } from "react";
import { getCards } from "../services/cardApiService";

const useCards = () => {
    const [cards, setCards] = useState(null);
    const [card, setCard] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setPending] = useState(true);
    
    const requestStatus = (loading, errorMessage, cards, card = null) => {
        setPending(loading);
        setError(errorMessage);
        setCards(cards);
        setCard(card);
    };
    
    const handleGetCards = async () => {
        try {
            setPending(true);
            const cards = await getCards();
            requestStatus(false, null, cards);
        } catch(error) {
            requestStatus(false, error, null);
        }
        setPending(false);
        };
    
    return {
        card,
        cards,
        isPending,
        error,
        handleGetCards,
    }
};

export default useCards;