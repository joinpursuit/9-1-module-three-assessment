import React from 'react';
import { useState, useEffect } from 'react';

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({})

    const handleMovies = (e) => {
        const chosen = e.target.value
        const found = movies.find((item) => item.id===chosen)
        setMovie(found || {})
    }


    useEffect(()=>{
        fetch('/films.json')
            .then((res)=>res.json())
            .then((data)=>{
                setMovies(data)
                // console.log(data)
            })
            .catch((err)=>{
                console.log(err)
            }) 
    },[])

    return (
        <div className='.movies'>
            <h1>Select a Movie</h1>
            <div className='dropdown'>
                <select onChange={handleMovies}>
                    <option value=""></option>
                    {movies.map((item) => { return (
                        <option key={item.id} value={item.id}>{item.title}</option>
                    )})}
                </select>
                {movie.id && (
                    <div>
                        <h1>Title: {movie.title}</h1>
                        <p>Release Date: {movie.release_date}</p>
                        <p>Description: {movie.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Movies;