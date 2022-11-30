import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        {" "}
        <img src="" alt="logo" />
      </Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </nav>
  );
}
