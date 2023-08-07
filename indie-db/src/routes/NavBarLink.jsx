import { Link } from 'react-router-dom';

const NavBarLink = ({ to, color, children }) => {
    return (
        <Link to={to} style={{color}}>
            { children }
        </Link>
    );
};

export default NavBarLink;