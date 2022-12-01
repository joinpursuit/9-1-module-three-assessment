import React, { useEffect } from 'react';
import './Movie.css';
export default function Movies({ data, setData, input, setInput }) {
  const handleChoice = (e) => {
    const chosen = e.target.value;
    const found = data.find((movie) => movie.id === chosen);
    setInput(found || {});
  };
  useEffect(() => {
    fetch('/films.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="movies">
      <h1 className="h1-tag">Select a Movie</h1>
      <div>
        <select onChange={handleChoice}>
          <option value=""></option>
          {data.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
        {input.id && (
          <div>
            <br></br>
            <h2>Title: {input.title}</h2>

            <p>
              <b>Release Date:</b>
              {input.release_date}
            </p>
            <p>
              <b>Description:</b>
              {input.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
