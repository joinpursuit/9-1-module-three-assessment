import { React, useState, useEffect } from 'react'

function Movies() {
    const movieData = `films.json`
    const [movie, setMovie] = useState([]); 
    const [results, setResults] = useState({})

    const handleChoice = (e) => {
        const title = e.target.value
        const filterResults= movie.find(film => film.id === title)
        setResults(filterResults || {})

    }
    useEffect(() => {
        fetch(movieData)
        .then((res) => res.json())
        .then((res) => {
            setMovie(res)
        })
        .catch((err) => console.log(err))
    }, [])


    return (
        <div className='movies'>
             <h2>Select a Movie</h2>
             <select onChange={handleChoice}>
            <option value=""></option>
            {movie.map((movie) => {
                return(
                    <option key={movie.id}
                    value={movie.id}>{movie.title}</option>
                )
            })}
        </select>
        {results.id ? (
            <div>
                <h2><span><b>Title: </b></span>{results.title}</h2>
                <p><span><b>Release Date: </b></span> {results.release_date}</p>
                <p><span><b>Description: </b></span> {results.description}</p>
            </div>
        ): null}
            
        </div>
    )
}

export default Movies;