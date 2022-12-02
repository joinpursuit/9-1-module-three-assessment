import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';



const Nav = () => {
    return (
        <Router>
        <nav>
            <Link to ="/">
                <img src={require('./assets/navLogo.jpg')} style={{}}></img>
            </Link>

            <Link to ="/Movies">
                Movies
            </Link>

            <Link to ="/People">
                People
            </Link>
            
            <Link to ="/Locations">
                Locations
            </Link>

           
        </nav>
        </Router>
    );
};

export default Nav;