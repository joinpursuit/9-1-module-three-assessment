import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
        <div className='nav'>
            <h1>
                <Link to="/">
               <button><img src='./manifest.json.icons[1].src' alt='logo'></img></button>  
               Home
                </Link>
            </h1>
            <h2>
                <Link to='/movies'>
                Movies
                </Link>
            </h2>
            <h2>
                <Link to="/people">
                People
                </Link>
            </h2>
            <h2>
                <Link to="/locations">
                Locations
                </Link>
            </h2>
        </div>
    </div>    
    );
};

export default NavBar;