import { Link } from "react-router-dom"
import Logo from "../Assets/ghibli.png"

export default function Nav () {
    return (
        <nav>
            <Link to="/"><img src={Logo} alt="studio ghibli logo"></img></Link>
            <Link to="/movies">Movies</Link>
            <Link to="/people">People</Link>
            <Link to="/locations">Locations</Link>
        </nav>
    )
}