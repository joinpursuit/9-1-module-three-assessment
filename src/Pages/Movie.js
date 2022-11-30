import React from "react";

export default function Movie({ movie }) {
  return (
    <div className="movie">
      <br />
      <h1>{movie.title}</h1>
      <p>
        <br />
        <b>Directed by:</b> <em>{movie.director}</em>
      </p>
      <br />
      <img
        src={movie.image}
        alt="movie.title"
        style={{ height: "450px", width: "310px" }}
      />

      <p>
        <b>Release Date:</b> {movie.release_date}
      </p>
      <p>
        {" "}
        <br />
        <b>Description:</b> {movie.description}
      </p>
    </div>
  );
}
