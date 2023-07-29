import MyCard from '../Card';

const Cards = ({ cards }) => {
    return (
    <>
    { cards.map((card) => {
        return (
            <MyCard key={ card._id } card={ card } />
        )
    }) }
    </>
    );
};

export default Cards;