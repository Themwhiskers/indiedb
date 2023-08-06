import { useParams } from 'react-router-dom';
import useCards from '../hooks/useCards';
import { useEffect } from 'react';
import { Container } from '@mui/material';
import PageHeader from '../../components/PageHeader';

const CardDetailPage = () => {
    const { id } = useParams();
    const { card, handleGetCard } = useCards();

    useEffect(() => {
        handleGetCard(id);
    }, []);

    return (
        <Container maxWidth='lg'>
            <PageHeader
                title='Business Details'
                subtitle='More info for the selected business'/>
            <div>Details of card #: {id}</div>
            {card && <h1>{card.title}</h1>}
        </Container>
    );
};

export default CardDetailPage;