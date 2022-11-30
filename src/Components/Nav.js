import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/">
                <img src='./Logo.png' alt='Logo' />
            </Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/people'>People</Link>
            <Link to='/locations'>Locations</Link>
        </nav>
    );
}

export default Nav;