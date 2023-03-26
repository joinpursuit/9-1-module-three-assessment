import { Link } from "react-router-dom";

import logo from "../../img/Ghibli.png";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100px",
        background: "#115BBB",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/movies" style={{ textDecoration: "none", color: "white" }}>
        <h1>Movies</h1>
      </Link>
      <Link to="/people" style={{ textDecoration: "none", color: "white" }}>
        <h1>People</h1>
      </Link>
      <Link to="/locations" style={{ textDecoration: "none", color: "white" }}>
        <h1>Locations</h1>
      </Link>
    </nav>
  );
};
export default Navbar;
