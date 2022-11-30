import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to={"/"} style={{ textDecorationLine: "none" }}>
        Home
      </Link>
      <Link to={"/movies"} style={{ textDecorationLine: "none" }}>
        Movies
      </Link>
      <Link to={"/people"} style={{ textDecorationLine: "none" }}>
        People
      </Link>
      <Link to={"/locations"} style={{ textDecorationLine: "none" }}>
        Locations
      </Link>
    </nav>
  );
}
