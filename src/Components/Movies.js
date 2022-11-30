import { useState, useEffect } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    fetch("films.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const found = movies.find(({ id }) => id === e.target.value);
    setMovie(found);
    e.target.value ? setIsSelected(true) : setIsSelected(false);
  };
  return (
    <div className="movies">
      <h2>Select a Movie</h2>
      <select onChange={handleChange}>
        <option value=""></option>
        {movies &&
          movies.map(({ id, title }) => (
            <option key={id} value={id}>
              {title}
            </option>
          ))}
      </select>

      {isSelected && (
        <article className="selected-movie">
          <h3>
            <span>Title: </span>
            {movie.title}
          </h3>
          <p>
            <span>Release Date: </span>
            {movie.release_date}
          </p>
          <p>
            <span>Description: </span>
            {movie.description}
          </p>
        </article>
      )}
    </div>
  );
}
