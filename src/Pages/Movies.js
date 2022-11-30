import { useEffect, useState } from "react";
import Movie from "./Movie";
export default function Movies() {
  // states to store data
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState({});
  //! fetch all movies
  useEffect(() => {
    fetch("./films.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMovies(data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleSelect = (e) => {
    const opts = e.target.value;
    const moviesFound = movies.find((mov) => mov.id === opts);
    setSelected(moviesFound || {});
    // setSelectedMovies("");
  };

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select onChange={handleSelect}>
        {" "}
        <option value=""></option>
        {movies.map((movie) => (
          <option value={movie.id} key={movie.id}>
            {movie.title}
            {/* {console.log(movie.title)} */}
          </option>
        ))}
      </select>
      {selected.id && (
        <div className="selected" style={{ textAlign: "center" }}>
          <Movie movie={selected} />
        </div>
      )}
    </div>
  );
}
