import { useState, useEffect } from "react";

function useMovies() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      const response = await fetch(
        "https://resource-ghibli-api.onrender.com/films"
      );
      const data = await response.json();
      setFilms(data);
    }
    fetchFilms();
  }, []);

  return { films };
}

export default useMovies;
