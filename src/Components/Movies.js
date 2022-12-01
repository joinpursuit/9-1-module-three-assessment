import React from 'react'
import {useEffect, useState, useParams} from "react"
//import films from "../../public/films.json"

export default function Movies() {

//captures data outside of fetch call and makes it available to process and render
const[movieData, setMovieData] =useState([])
//Movie selections may change. Captures and updates to current selection
const[thisMovie, setThisMovie] =useState({})

//allows asynchronous fetching
useEffect(() => {
  fetch('films.json')
  .then(res => res.json())
  .then((data)=> setMovieData(data))
  //console.log(data) - this rendered error - data not defined
  .catch((err) => console.log(err)
  
)
},[])

//uses select option "value" property value of selected movie to search for matching movie in data and store it in "thisMovie"
const handleSelection = (e) =>{
  const selectedMovie = e.target.value
  const foundMovie = movieData.find((movie) => movie.id === selectedMovie)
  setThisMovie(foundMovie || {})
}


  return (
  <>
    <div>Movies</div>
      <ul>
        {/* <select onChange={handleSelection}>
          <option value=""> */}
        {  
         movieData &&  
          movieData.map(movie => (
            // <option key={movie.id} value={movie.id}>
              <li >
               Movie Title: {movie.title}  
              </li>
            // </option>
           ))
         }
          {/* </option>
        </select> */}
      </ul>
  </>
  )
}
