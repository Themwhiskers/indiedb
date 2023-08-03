import Card from './card/components/Card'
import { Grid } from '@mui/material';

const Cards = ({ cards }) => {

    if (!cards) {
        return <h1>No cards here yet</h1>
    }

    return (
        <Grid container spacing={2} pb={2} >
            {cards.map((card) =>{
                return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={card._id}>
                        <Card key={card._id} card={card}/>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Cards;