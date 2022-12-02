import { Link } from "react-router-dom";
import photo from "./studio-ghibli-totoro.png"

export default function Nav(){
    return(
        <nav>
            <Link to="/"><img src={photo} /></Link>
            <Link to=" /movies">Movies</Link>
            <Link to=" /people">People</Link>
            <Link to=" /location">Locations</Link>
        </nav>
    )
}