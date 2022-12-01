import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";
import ErrorMessage from "./components/ErrorMessage";
import Home from "./components/Home";
// import { pers } from "./persons";
// import { place } from "./places";
// import { mov } from "./films";

import "./App.css";

function App() {
  const [people, setShowPeople] = useState([]);
  const [locations, setShowLocations] = useState([]);
  const [movies, setShowMovies] = useState([]);

  useEffect(() => {
    fetch("people.json")
      .then((res) => res.json())
      .then((pep) => setShowPeople(pep));

    fetch("locations.json")
      .then((res) => res.json())
      .then((loc) => setShowLocations(loc));

    fetch("films.json")
      .then((res) => res.json())
      .then((cinema) => setShowMovies(cinema));
  }, []);
  // console.log("import", pers);
  // console.log("import", place);
  // console.log("import", mov);
  console.log("ppl", people);
  console.log("locations", locations);
  console.log("movies", movies);

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
        <Route path="/Movies" element={<Movies mov={movies} />} />
        <Route path="/People" element={<People pers={people} />} />
        <Route path="/Locations" element={<Locations place={locations} />} />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
    </div>
  );
}

export default App;
