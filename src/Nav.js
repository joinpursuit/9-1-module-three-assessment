import { Link } from "react-router-dom";
import logo from "./ghibli-logo.png"

export default function Nav () {
    return (
        <nav>
            <Link to='/'>
                <img src={logo} alt="studio ghibli logo"></img>
            </Link>

            <Link to="/movies">
                <h1>Movies</h1>
            </Link>

            <Link to="/people">
                <h1>People</h1>
            </Link>

            <Link to="/locations">
                <h1>Locations</h1>
            </Link>
        </nav>
    )
}