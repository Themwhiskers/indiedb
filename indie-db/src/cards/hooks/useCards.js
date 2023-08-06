import { useState } from 'react';
import { getCards } from '../services/cardApiService';
import { getCard } from '../services/cardApiService';
import useAxios from './useAxios';

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
    
    useAxios();

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

    const handleGetCard = async (id) => {
        try {
            setPending(true);
            const card = await getCard(id);
            requestStatus(false, null, null, card);
        } catch (error) {
            requestStatus(false, error, null);
        }
    }
    
    return {
        card,
        cards,
        isPending,
        error,
        handleGetCards,
        handleGetCard,
    }
};

export default useCards;