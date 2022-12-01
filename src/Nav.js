import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css';
export default function Nav() {
  return (
    <nav>
      <Link exact to={`/`}>
        <img
          src="https://twinpixelvideo.com/wp-content/uploads/2016/03/cropped-NAVBAR-LOGO-04.png"
          alt="nav"
        ></img>
      </Link>

      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/location">Location</Link>
    </nav>
  );
}
