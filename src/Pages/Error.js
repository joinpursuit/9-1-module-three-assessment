import { useState } from "react";
import { Link } from "react-router-dom";

export default function Error({ find }) {
  //
  //   const [clickListener, setClickListener] = useState("");

  return (
    <div className="error" style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>Not Found</h1>
      <Link to="/people">
        <img
          //   onClick={!find}
          src="https://cdn.dribbble.com/users/2499518/screenshots/5032881/sbfavs_4x.jpg"
          alt="error_logo"
          style={{ height: "600px", width: "600px" }}
        />
      </Link>

      <hr />
      <div className="link_path" style={{ marginLeft: "10px" }}>
        {" "}
        <Link style={{ marginLeft: "10px" }} to="/">
          Home
        </Link>
        <Link style={{ marginLeft: "10px" }} to="/movies">
          Movies
        </Link>
        <Link style={{ marginLeft: "10px" }} to="/people">
          People
        </Link>
        <Link style={{ marginLeft: "10px" }} to="locations">
          Locations
        </Link>
      </div>
    </div>
  );
}
