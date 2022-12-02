export default function Movie({ movie }) {
  return (
    <aside>
      <h3>
        Title: <em style={{ fontWeight: "normal" }}>{movie.title}</em>
      </h3>
      <p>
        <span>Release Date:</span> {movie.release_date}
      </p>
      <p>
        <span>Description:</span> {movie.description}
      </p>
    </aside>
  );
}
