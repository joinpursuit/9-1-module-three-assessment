import React from "react"
import { useState, useEffect } from "react"
import MovieDetails from "./MovieDetails"

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [select, setSelect] = useState()

  useEffect(() => {
    fetch("./films.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err))
  }, [])

  function handleSelect(e) {
    const selected = e.target.value
    const found = movies.find((item) => item.id === selected)
    setSelect(found || {})
  }
  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <form className="Form">
        <select onChange={handleSelect}>
          <option value=""></option>
          {movies.map((selection) => (
            <option key={selection.id} value={selection.id}>
              {" "}
              {selection.title}
            </option>
          ))}
        </select>
      </form>
      <MovieDetails select={select} />
    </div>
  )
}
