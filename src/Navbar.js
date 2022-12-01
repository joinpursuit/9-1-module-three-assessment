import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to={"/"} style={{ textDecorationLine: "none" }}>
        <img src={logo} alt="gibli studio logo" />
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
