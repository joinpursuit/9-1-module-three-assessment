import { Link } from "react-router-dom";

export default function Navigate(){
    return(
        <header>
            <nav>
                <div>
                    <Link to="/"><img className="images" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="thumbnail"/></Link>
                </div>
                <div>
                    <Link to="/movies">Movies</Link>
                </div>
                <div>
                    <Link to="/people">People</Link>
                </div>
                <div>
                    <Link to="/locations">Locations</Link>
                </div>
            </nav>
        </header>
    )
}