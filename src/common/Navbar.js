import { Link } from "react-router-dom";
import logo from "../assets/noface.png";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="noFace" />
      </Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </nav>
  );
}
