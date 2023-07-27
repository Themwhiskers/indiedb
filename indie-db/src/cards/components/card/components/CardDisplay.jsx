import CardMedia from "@mui/material/CardMedia";

const CardDisplay = ({ image }) => {

    const { url, alt } = image;

    return (
    <CardMedia component="img" height="200" image={url} alt={alt}/>
    );
};

export default CardDisplay;