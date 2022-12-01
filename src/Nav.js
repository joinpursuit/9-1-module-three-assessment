import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <div className="nav">
            <nav>
                <Link to="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcvGr_NwOINTvOf5xZxkM7XvlIUwXPkTlDBq1xrIq&s" alt="ghibli_logo"/>
                </Link>    
                
                <Link to="/">Home</Link>
                <Link to="/Movies">Movies</Link>
                <Link to="/People">People</Link>
                <Link to="/Locations">Locations</Link>
            </nav>
        </div>
    )
}