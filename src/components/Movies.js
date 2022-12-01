import React, { useEffect, useState } from "react";

const Movies = ({ mov }) => {
  const [filmSelectiD, setFilmSelectiD] = useState("");
  const [filmSelect, setFilmSelect] = useState("");

  function handleChange(e) {
    setFilmSelectiD(e.target.value);
  }

  useEffect(() => {
    setFilmSelect(mov.find((f) => f.id === filmSelectiD));
  }, [filmSelectiD]);

  //   console.log(filmSelectiD);
  //   console.log(filmSelect);

  return (
    <div className="movies">
      <label for="film">
        <h2>Select a Movie</h2>
        <select onChange={handleChange} name="film" id="film">
          <option value=""></option>
          {mov.map((e) => (
            <option value={e.id}>{e.title}</option>
          ))}
        </select>
      </label>
      {filmSelectiD && filmSelect && (
        <div className="movie-detail">
          <h3>
            <strong className="movie_Header">Title: </strong>
            {filmSelect.title}
          </h3>
          <h3>
            <strong className="movie_Header">Release Date: </strong>
            {filmSelect.running_time}
          </h3>
          <h3>
            <strong className="movie_Header">Description: </strong>
            {filmSelect.description}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Movies;
