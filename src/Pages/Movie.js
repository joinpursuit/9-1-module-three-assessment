export default function Movie({ movie }) {
  return (
    <div className="movie">
      <br />
      <h2>{movie.title}</h2>
      <p>
        <br />
        <b>Release Date:</b> {movie.release_date}
      </p>
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
        {" "}
        <b>Length: </b> {movie.running_time} min
      </p>
      <p>
        {" "}
        <br />
        <b>Description:</b> {movie.description}
      </p>
    </div>
  );
}
