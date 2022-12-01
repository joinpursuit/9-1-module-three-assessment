import React from 'react'
import {Link} from "react-router-dom"
// import wonderWomanLionness from "../../assets/wonderWomanLionness.png"

export default function Nav() {

  // const myIcon = wonder-woman-lionness
  return (
    <div>
        <nav>
          {/* <img src="myIcon"></img> */}
            <Link className='homePage' to="/">Home</Link>
            <Link className='moviesPage' to="/movies">Movies</Link>
            <Link className='peoplePage' to="/people">People</Link>
            <Link className='locationsPage' to="/locations">Locations</Link>
        </nav>
    </div>
  )
}
