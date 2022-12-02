import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img
          style={{ height: "50px", width: "50px" }}
          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wOBU3SLjQ9358Km9YWYasPZyebp.jpg"
          alt="The Red turtle"
        />
      </Link>
      <Link to="movies">Movies</Link>
      <Link to="people">People</Link>
      <Link to="locations">Locations</Link>
    </nav>
  )
}
