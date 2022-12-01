// import react & link
// link logo to home 
// link home page to home
// link movies to movies
// link people page to people
// link location page to location

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <Link to="/">
                <img src='gh.jpeg'/>
            </Link>
              <Link to="/">
                    <h1>Home</h1>
                </Link>
                <Link to="/movies">
                    <h1>Movies</h1>
                </Link>
                <Link to="/people">
                    <h1>People</h1>
                </Link>
                <Link to="/location">
                    <h1>Locations</h1>
                </Link>
        </nav>
    );
};

export default Nav;