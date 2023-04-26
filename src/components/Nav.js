import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const Nav = () => {
    const [catJson, setCatJson] = useState([]);
    const cataas = 'https://cataas.com'
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://cataas.com/cat?json=true');
            const data = await response.json();
            setCatJson(data);
        };

        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 60000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <nav style={navStyle}>
            <Link to="/">Home</Link>
            <p>New Cat every 60 seconds!</p>
            {catJson.url ? <img style={{width: '100%', height: 'auto'}} src={`${cataas}${catJson.url}`} alt="cat" /> : <p>Loading...</p>}
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
