import { Grid } from '@mui/material';
import MyCard from '../Card';

const Cards = ({ cards }) => {
    return (
    <>
    { cards.map((card) => {
        return (
        <Grid container spacing={2} pb={2} >
            <Grid item xs={12} sm={6} md={4} key={card._id}>
                <MyCard 
                    card={card}
                    key={card._id}/>
            </Grid>
        </Grid>
        )
    }) }
    </>
    );
};

export default Cards;