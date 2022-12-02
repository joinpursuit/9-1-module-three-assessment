import React from "react"

export default function MovieDetails(select) {
  // console.log(select)
  return (
    <div className="movie_detail">
      <h1>Title</h1>
      <h2>{select.movie.title}</h2>
      <h4>Release Date:</h4>
      <p>{select.movie.release_date}</p>
      <h5>Description:</h5> <p>{select.movie.description}</p>
    </div>
  )
}
