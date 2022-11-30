import { Link } from "react-router-dom";
import logo from '../assets/ghibli-logo.png'
import './Nav.css'


function Nav(props) {
    return (
        <nav className="nav-bar">
            <Link to = "/">
            <img src = {logo} alt = "ghibli-logo" />
            </Link>

            <Link to = "/movies">Movies</Link>

            <Link to = "/people">People</Link>

            <Link to = "/locations">Locations</Link>
            

        </nav>
    );
}

export default Nav;