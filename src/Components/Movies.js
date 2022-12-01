import React from "react";
import { useState, useEffect } from "react";
import "./Movies.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [picked, setPicked] = useState({});

  function handleSelection(e) {
    let selected = e.target.value;
    let chosen = movies.find((movie) => movie.id === selected);
    setPicked(chosen);
  }

  useEffect(() => {
    fetch("./films.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="movies">
      <div className="movies_div">
        <h2 className="movies_h2">Select a Movie</h2>
        <hr></hr>
        <select className="select" onChange={handleSelection}>
          <option value=""></option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
        {Object.keys(picked) !== 0 && (
          <div className="movies_content">
            <div className="movie_info">
              <div>
                <h3>Title: {picked.title}</h3>
                <h4>Released: {picked.release_date}</h4>
                <p>{picked.description}</p>
              </div>
            </div>
            {Object.keys(picked) !== 0 && (
              <img className="movie_pic" src={picked.image} alt={picked.name} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
