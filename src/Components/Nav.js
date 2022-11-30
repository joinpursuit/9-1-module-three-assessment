import React from 'react'
import {Link} from "react-router-dom"

export default function Nav() {
  return (
    <div>
        <nav>
            <Link className='homePage' to="/">Home</Link>
            <Link className='moviesPage' to="/movies">Movies</Link>
            <Link className='peoplePage' to="/people">People</Link>
            <Link className='locationsPage' to="/Locations"></Link>
        </nav>
    </div>
  )
}
