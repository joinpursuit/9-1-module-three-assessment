import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div>
        <Link to="/">
          <img
            className="logo"
            src="https://saintjosephsquare.com/wp-content/uploads/2022/09/Unknown.png"
            alt="logo"
          />
        </Link>
      </div>
      <ul className="nav__ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  );
}
