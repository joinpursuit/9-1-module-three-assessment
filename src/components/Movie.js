export default function Movie({ movie }) {
  return (
    <div>
      <h3>Title: {movie.title}</h3>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Description:</strong> {movie.description}
      </p>
    </div>
  );
}
