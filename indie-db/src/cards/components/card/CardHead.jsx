import CardMedia from '@mui/material/CardMedia';
const CardHead = ({ image }) => {
    const { url, alt } = image;

    return <CardMedia component='img' height='194' image={url} alt={alt}/>
};

export default CardHead;