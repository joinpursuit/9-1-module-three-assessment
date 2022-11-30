import { useEffect, useState } from "react";
import "./Movies.css";
const Movies = () => {
  const URL = `../public/movies.JSON`;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((resJson) => setData(resJson))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleChange = () => {};

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select className="movies-select" value="">
        <option value=""></option>
      </select>
    </div>
  );
};

export default Movies;
