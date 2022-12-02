import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div>
      <nav>
      <Link to={"/"}>
        <img
          src={
            "https://www.pngfind.com/pngs/m/385-3859275_totoro-studio-ghibli-logo-hd-png-download.png"
     
          }
          alt={"Ghibli-studio"}
        />
      </Link>
      <Link to={"/movies"}>Movies</Link>
      <Link to={"/people"}>People</Link>
      <Link to={"/locations"}>Locations</Link>
      </nav>
    </div>
  );
}

export default Navbar;
