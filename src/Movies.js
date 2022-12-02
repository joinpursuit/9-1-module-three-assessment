import React, { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleChoice = (e) => {
    const chosen = e.target.value;
    const found = movies.find((movie) => movie.id === chosen);
    setSelectedMovie(found || {});
  };

  useEffect(() => {
    fetch("films.json")
      .then((response) => response.json())
      .then((res) => {
        setMovies(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="movies">
      <aside>
        <h2>Select a Movie</h2>
        <select onChange={handleChoice}>
          <option value=""></option>
          {movies.map((choice) => (
            <option key={choice.id} value={choice.id}>
              {choice.title}
            </option>
          ))}
        </select>
      </aside>

      {selectedMovie.id && (
        <div className="movie-detail">
          <h2>Title: {selectedMovie.title}</h2>
          <p>Release date: {selectedMovie.release_date}</p>
          <p>Description: {selectedMovie.description}</p>
        </div>
      )}
    </div>
  );
}

export default Movies;
