import React, { useEffect, useState } from "react";
import "../index.css";

function Movies() {
  const [movieData, setMovieData] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState({});

  const handleChange = (e) => {
    const chosen = e.target.value;
    const selected = movieData.find((films) => films.id === chosen);
    setSelectedFilm(selected || {});
  };

  useEffect(() => {
    fetch("films.json")
      .then((res) => res.json())
      .then((movieData) => setMovieData(movieData))

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="movies">
      <aside><h2>Select a movie</h2></aside>
      <aside>
        <select onChange={handleChange}>
          <option value=""></option>
          {movieData.map((choice) => (
            <option key={choice.id} value={choice.id}>
              {choice.title}
            </option>
          ))}
        </select>
      </aside>

      {selectedFilm.id && (
        <div className="movie-content">
          <div className="img-description">
            <img
              classname="movie-img"
              src={selectedFilm.image}
              alt="movieimg"
              height="500px"
            />
          </div>
          <div >
          <h2>Title:{selectedFilm.title}</h2>
          <p>
            <span>Release Date: </span>
            {selectedFilm.release_date}
          </p>
          <p><span>Description: </span>{selectedFilm.description}</p>
        </div>
        </div>
        
      )}
    </div>
  );
}

export default Movies;
