import React from "react";
import { useState } from "react";
import movies from "../data/films.json";

function Movies() {
  const [currentlySelected, setCurrentlySelected] = useState('');

  const titles = movies.map(movie => {
    return <option>{movie.title}</option>});

  const currentMovieData = movies.find(movie => {
    return movie.title === currentlySelected;
  });

  function handleDropdownChange(e) {
    setCurrentlySelected(e.target.value);
  }

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select onChange={handleDropdownChange}>
        <option></option>
        {titles}
      </select>
      <h2>Tiltle: {currentMovieData?.title}</h2>
      <p><strong>Release Date: </strong>{currentMovieData?.release_date}</p>
      <p><strong>Description: </strong>{currentMovieData?.description}</p>
    </div>
  );
}

export default Movies;
