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
      {/* <ul>
        {  
         movieData &&  
          movieData.map(movie => (
            // <option key={movie.id} value={movie.id}>
              <li >
               Movie Title: {movie.title}  
              </li>
           ))
         }  
      </ul> */}
      <div className='movies'>
        <h2 className='movieListTitle'>Select a Movie</h2>
        <div className='movieList'>
        <select onChange={handleSelection}>
          <option value=''></option>
          {movieData.map(moviePick =>( 
              <option key={moviePick.id} value={moviePick.id}>
                  {moviePick.title}
            
              </option>
          ))}
        </select>
        <br/> <br/>
        {thisMovie.id && (
          <div>
          <h2>{thisMovie.title} </h2>
         <h3> {thisMovie.release_date}</h3>
          <p>{thisMovie.description}</p>
          </div>
        )}
        </div>
      </div>
  </>
  )
}
