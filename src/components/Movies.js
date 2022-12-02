import React from "react"
import { useState, useEffect } from "react"


export default function Movies(){

const [data, setData] = useState([])
const [film, setFilm] = useState(false)

const handleChoice = (e)=> {
    const pick = (e.target.value)
    const found = data.find(films => films.title === pick)
    setFilm(found || {})
}

useEffect(() => {
    fetch("./films.json")
        .then((res) => res.json())
        .then((films) => setData(films))
        .catch((err) => {console.log(err)}) 
        }, [])
        
        return (
            <div className="movies">
                <h1>Select a Movie</h1>
                <select onChange={handleChoice}>
                    <option value=""></option>
                        {data.map((movie)=>(
                    <option key={movie.title} value={movie.title}>
                        {movie.title}
                    </option>
                ))}
            </select>
            {film.title && (
                <div>
                    <h2>Title: {film.title}</h2>
                    <p>Release: {film.release_date}</p>
                    <p>Descrpition: {film.description}</p>
                </div>    
            )}
            </div>
    )
}
