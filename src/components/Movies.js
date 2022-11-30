import { useEffect, useState } from "react";

import { get } from "../fetch";

import Movie from "./Movie";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();

  function handleSelect(e) {
    setMovie(movies.find((movie) => movie.title === e.target.value));
  }

  useEffect(() => {
    get("films").then((res) => setMovies(res));
  }, []);

  return (
    <div className="movies">
      <h2>Select a Movie</h2>
      <label htmlFor="movieSelect">
        <select id="movieSelect" onChange={handleSelect}>
          <option value=""></option>
          {movies.map((movie) => (
            <option value={movie.title} key={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
      </label>
      {movie ? <Movie movie={movie} /> : ""}
    </div>
  );
}
