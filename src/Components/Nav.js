import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav(props) {
    return (
        <nav>
       <Link Link style={{color:'white', textDecoration: 'none'}} to='/'> 
       <img className='logo' src='logo.png'/>
       </Link>
        <ul className='nav-links'>
            <Link style={{color:'white', textDecoration: 'none'}} to='/movies'>
                <li>Movies</li>
            </Link>
            <Link style={{color:'white', textDecoration: 'none'}} to='/people'>
                <li>People</li>
            </Link>
            <Link style={{color:'white', textDecoration: 'none'}} to='/location'>
                <li>Location</li>
            </Link>
        </ul>
        
    </nav>
    );
}

export default Nav;