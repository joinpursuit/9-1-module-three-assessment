import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        {" "}
        <img
          src="https://www.nicepng.com/png/detail/198-1987142_i-want-to-watch-all-of-the-studio.png"
          alt="logo"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </nav>
  );
}
