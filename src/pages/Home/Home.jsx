import Movie from "../../components/Movie/Movie";
import useMovies from "../../components/useMovies";

import "./home.css";

function Home() {
  const { films } = useMovies();

  return (
    <>
      <section className="section">
        <div className="section-title">
          <h1>
            Welcome to <span className="section-span">GhibliApp</span>
          </h1>
        </div>

        <div className="section-center featured-center">
          {films.map((film) => (
            <Movie {...film} key={film.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
