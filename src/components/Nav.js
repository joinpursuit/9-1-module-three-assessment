import { Link } from "react-router-dom"
import "./Nav.css"

export default function Nav() {
    return (
        <div>
            <header>
                <h1>
                    <Link to="/" >
                     <img src="https://www.freeiconspng.com/thumbs/clapperboard-png/clapperboard-png-12.png"
                     alt="logo"/>
                    </Link>
                    <Link to="/movies" >
                     Movies
                    </Link>
                    <Link to="/people" >
                     People
                    </Link>
                    <Link to="/locations" >
                     Locations
                    </Link>
                </h1>
            </header>
        </div>
    )
}