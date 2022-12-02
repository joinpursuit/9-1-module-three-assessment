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
            setMovies(data)
        },open)

    })


    return (
        <>
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
        </>
    );
};

export default Movies;