import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav style={navStyle}>
            <Link to="/">Home</Link>
        </nav>
    );
}

const navStyle = {
    width: '25%',
    color: 'pink',
    backgroundColor: 'brown',
    float: 'right'
}

export default Nav;
