import Error from "../components/Error";
import Spinner from "../components/Spinner";
import Cards from '../cards/Cards';

const CardsFeedback = ({ isPending, error, cards, onDelete }) => {
    if(isPending) return <Spinner/>
    if(error) return <Error errorMessage={error}/>
    if(cards && !cards.length) return <p>Nothing found...</p>
    if(cards) return <Cards cards={cards} onDelete={onDelete}/>
};

export default CardsFeedback;