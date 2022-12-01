import { useEffect, useState } from "react";
import { get } from "../api/fetch";
import Movie from "./Movie";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();

  function handleSelect(e) {
    const selectedMovie = movies.find(
      (movie) => movie.title === e.target.value
    );
    setMovie(selectedMovie);
  }

  useEffect(() => {
    get("films")
      .then((res) => setMovies(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="movies">
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
    </section>
  );
}
