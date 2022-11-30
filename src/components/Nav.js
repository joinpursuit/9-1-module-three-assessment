import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="./">
        {" "}
        <img
          className="logo"
          src="../studio-ghibli-logo.png"
          alt="studio ghibli"></img>
      </Link>

      <Link to="./movies">Movies</Link>
      <Link to="./people">People</Link>
      <Link to="./locations">Locations</Link>
    </nav>
  );
};
export default Nav;
