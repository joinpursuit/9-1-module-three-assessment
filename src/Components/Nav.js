import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='.navs'>
            <Link to="/">
                <img style={{width:50, height:50}} src="https://cdn.vox-cdn.com/thumbor/5qtkLtcLweUQ4Wv4YEZFUxiDhHE=/928x997:3696x2940/920x613/filters:focal(1550x1548:2510x2508):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66888887/Studio_Ghibli_Logo.0.jpg" alt="logo" />
            </Link>
            <Link to="/movies">Movies</Link>
            <Link to="/people">People</Link>
            <Link to="/locations">Locations</Link>
        </nav>
    );
};

export default Nav;