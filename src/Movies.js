import React from 'react';
import { useEffect, useState } from 'react';

const Movies = () => {
 const [movies, setMovies] = useState([])
 const [selected,setSelected] = useState({})

 function selectedMovie(e) {
     const movie = e.target.value
     const foundMovie = movies.find((mov)=>{
        return mov.id === movie
     })
      setSelected(foundMovie || {})
 }

//  console.log(selected)
    useEffect(() => {
        fetch(`./films.json`)
            .then(res => res.json())
            .then(res => {
           setMovies(res)
        })    
        .catch(err => console.log(err))
    }, [])
    return (
        <div className='movies'>
            <h1>Select a Movie</h1>
            <select onChange={selectedMovie}>
                <option></option>
                {movies.map((movie)=>{
                    return(
                        <option value={movie.id}>{movie.title}</option>
                    )
                })}
            </select>
            {selected.id ? 
                 <>
                 <h2>Title: {selected.title}</h2>
                 <p>Release Date: {selected.release_date}</p>
                 <p>Description: {selected.description}</p>
                 </> 
                :   null}
        </div>
    );
};

export default Movies;