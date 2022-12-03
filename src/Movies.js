import React from 'react';
import { useState, useEffect } from "react";
import MoviesListItem from './MoviesListItem';

const Movies = () => {
    const [open, setOpen] = useState(false)
    const [movies, setMovies] = useState([])

    const handleOpen = () => {
        setOpen(!open)
    }

    useEffect(() => {
        fetch('films.json')
        .then(response => response.json())
        .then(data => {
            // console.log('Movies Data: ',data);
            // for (const movie of data) {
            //     console.log(movie)
                
            // }
            setMovies(data)
        })

    })
    // console.log(movies)


    return (
        <>
        <div className='movies'>
        <h1>Select a Movie</h1>
        <button onClick={handleOpen}>Dropdown</button>
        {open ? (
            movies.map((movie) => {
                return (
                    <ul>
                        <li>
                            {movie.title}
                        </li>
                    </ul>
                )
            })
        ) : null }
        {open ? <div>Is Open</div> : <div>Is Closed</div>} 
        </div>
        </>
    );
};

export default Movies;