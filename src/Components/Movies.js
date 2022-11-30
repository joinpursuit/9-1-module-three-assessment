import { useContext, useEffect, useState } from "react";
import { ContextData } from "../Provider";
import Dropdown from "./Dropdown";
import './Movies.css'

function Movies(props) {
    const {movies, setMovies, fetchData } = useContext(ContextData)
    // declare state for dropdown
    const [select, setSelect] = useState("")
    // declare state for object values for select choice
    const [movieInfo, setMovieInfo] = useState({
        title: "",
        releaseDate: "",
        description: "",
    })
   

    useEffect(() => {
        fetchData(`films`)
        .then(respJson => setMovies(respJson))
    })
    return (
        <div className="movies">
            <h2>Select A Movie</h2>
            <Dropdown 
            dataArr={movies}
            stateVar = {select} 
            stateVarFunction = {setSelect}
            displayVar = {movieInfo}
            displayVarFunction = {setMovieInfo}
             />
                {
                movieInfo.title && 
                <section className="movieInfo">
                    <h4>{movieInfo.title}</h4>
                    <p>Released: {movieInfo.releaseDate}</p>
                    <p>Description: {movieInfo.description}</p>
                </section>
                    
                }

             
            
            
        </div>
    );
}

export default Movies;