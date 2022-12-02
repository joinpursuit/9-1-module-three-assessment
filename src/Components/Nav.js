import React from 'react'
import {Link} from "react-router-dom"
import wonderWomanLionness from "../wonderWomanLionness.png"

export default function Nav() {

  // const myIcon = wonder-woman-lionness
  return (
    <div>
        <nav>
          
          <Link to="/">
            <img className="wonderWoman" src={wonderWomanLionness} alt="wonder woman"/> </Link>

          {/* <Link to="/about">

          <img
            src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
            alt="example"
          /> */}
        {/* </Link> */}

            <Link className='homePage' to="/">Home</Link>
            <Link className='moviesPage' to="/movies">Movies</Link>
            <Link className='peoplePage' to="/people">People</Link>
            <Link className='locationsPage' to="/locations">Locations</Link>
        </nav>
    </div>
  )
}
