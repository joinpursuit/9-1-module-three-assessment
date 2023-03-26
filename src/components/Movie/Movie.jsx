import "./movie.css";

const Movie = ({ title, image, description, release_date }) => {
  return (
    <>
      <article className="movie-card">
        <div className="movie-img-container">
          <img src={image} alt={title} className="movie-img" />
        </div>
        <div className="movie-info">
          <div className="movie-title">
            <h3>{title}</h3>
            <h2>
              <span style={{ fontWeight: "bold", color: "black" }}>
                Release Date:
              </span>{" "}
              {release_date}
            </h2>
          </div>
          <div>
            <h4>{description}</h4>
          </div>
        </div>
      </article>
    </>
  );
};
export default Movie;
