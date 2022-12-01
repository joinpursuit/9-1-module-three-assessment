import { useState, useEffect } from "react";
import Option from "./Option"
import movieData from "../films.json"

export default function Movies() {
    const [movies, setMovies] = useState([...movieData])
    const [selectedMovie, setSelectedMovie] = useState({})

    function handleSelectChange(event) {
        for (const movie of movies) {
            if (movie.title === event.target.value) {
                setSelectedMovie(movie)
            } else if (event.target.value === "") {
                setSelectedMovie({})
            }
        }
      }

    return (
        <div>
        <h1>Movies</h1>
        <div>
            <form>
                <select id="select" name="select" onChange={handleSelectChange} >
                    <option value="" ></option>
                    {movies &&
                    movies.map((movie) => {
                        return <Option movie={movie} key={movie.id}/>
                    })}
                </select>
            </form>
        </div>
        { selectedMovie.title ? 
        <div>
        <h1><span>Title:</span> {selectedMovie.title}</h1>
        <p><span>Release Date:</span> {selectedMovie.release_date}</p>
        <p><span>Description:</span> {selectedMovie.description} </p>
        </div>
        :
        null
        }
        </div>
    )
}