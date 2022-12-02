import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <nav className="navbar">
        <Link to="/">
          <img src='https://filmsxpress.com/userimages/23/images/movie-popcorn.jpg' alt="MoviePopcorn" />
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
      </nav>
    </div>
  );
}

export default Nav;
