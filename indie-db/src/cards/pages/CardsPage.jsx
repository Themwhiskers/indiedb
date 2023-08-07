import { Container } from "@mui/material";
import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../CardsFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {
    const { value, handleGetCards, handleDeleteCard } = useCards();
    const { cards, error, isPending, filteredCards } = value;
  
    useEffect(() => {
      handleGetCards();
    }, []);
  
    const onDeleteCard = async (cardId) => {
      await handleDeleteCard(cardId);
      await handleGetCards();
    };
  
    return (
      <Container>
        <PageHeader
          title="Cards"
          subtitle="Here you can find business cards from all categories"
        />
  
        <CardsFeedback
          isPending={isPending}
          error={error}
          cards={filteredCards}
          onDelete={onDeleteCard}
        />
      </Container>
    );
  };

export default CardsPage;