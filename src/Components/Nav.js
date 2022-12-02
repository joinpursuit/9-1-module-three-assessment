import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Nav() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="https://i.pinimg.com/originals/15/26/5a/15265af91d058d33da9d448a7cd070f9.gif"
            alt="navlogo"
          />
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/location">Locations</Link>
      </nav>
    </div>
  );
}

export default Nav;
