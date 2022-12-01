import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img src="" alt="" />
      </Link>
      <Link to="movies">Movies</Link>
      <Link to="people">People</Link>
      <Link to="locations">Locations</Link>
    </nav>
  )
}
