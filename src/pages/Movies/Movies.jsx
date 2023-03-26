import { useState } from "react";

import useMovies from "../../components/useMovies";
import Movie from "../../components/Movie/Movie";

import "./movies.css";

const Movies = () => {
  const { films } = useMovies();
  const [selectedFilm, setSelectedFilm] = useState(null);

  function handleSelectChange(event) {
    const selectedFilmId = event.target.value;
    setSelectedFilm(films.find((film) => film.id === selectedFilmId));
  }

  return (
    <div className="movies">
      <div className="section-title">
        <h1>Select a Movie</h1>
      </div>
      <div className="movie-center">
        <select onChange={handleSelectChange}>
          <option value="">-- Select a movie --</option>
          {films.map((film) => (
            <option key={film.id} value={film.id}>
              {film.title}
            </option>
          ))}
        </select>

        {selectedFilm && <Movie {...selectedFilm} />}
      </div>
    </div>
  );
};

export default Movies;
