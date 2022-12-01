import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";
import ErrorMessage from "./components/ErrorMessage";
import Home from "./components/Home";
import { pers } from "./persons";
import { place } from "./places";
import { mov } from "./films";

import "./App.css";
// import People from "../public/people" assert { type: "json" };

function App() {
  fetch("../public/people.json")
    .then((res) => res.json)
    .then((data) => console.log(data));

  // console.log(pers);
  // console.log(mov);
  // console.log(place);

  return (
    <div className="app">
      <nav className="nav-bar">
        <Link to="./">
          <img
            className="img"
            src={"https://thumbs.gfycat.com/WhiteShamelessBuzzard-max-1mb.gif"}
          />
        </Link>

        <h2>
          <Link to="/Movies">Movies</Link>
        </h2>
        <h2>
          <Link to="/People">People</Link>
        </h2>
        <h2>
          <Link to="/Locations">Locations</Link>
        </h2>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies mov={mov} />} />
        <Route path="/People" element={<People pers={pers} />} />
        <Route path="/Locations" element={<Locations place={place} />} />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
    </div>
  );
}

export default App;
