import React from 'react'
import {useEffect, useState, useParams} from "react"

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
      <div className='movies'>
        <div className='moviePicBox'>
            <div className='moviePic1'></div>
            <div className='moviePic2'></div>
            </div>
        <h2 className='movieListTitle'>Select a Movie</h2><br/>
        <div className='movieList'>
        <select 
        className='movieSelector'
        onChange={handleSelection}>
          <option value=''></option>
          {movieData.map(moviePick =>( 
              <option key={moviePick.id} value={moviePick.id}>
                  {moviePick.title}
            
              </option>
          ))}
        </select><br/>
        
        <br/> <br/>
        {thisMovie.id && (
          <div className='movieBox'>
            <div className='movieInfo'>
              <div className='titleDiv'>
              <h2 className='movieTitle'>Title:</h2><span className='titleText'>{thisMovie.title}</span> </div><br/>
              <div><h4 className='releaseDate'> Release Date:</h4><span>{thisMovie.release_date}</span></div>
              <p className='movieDescription'>{thisMovie.description}</p>
            </div>
          </div>
        )}
        </div>
      </div>
  </>
  )
}
