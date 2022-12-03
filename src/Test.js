import React from 'react';
import Select from 'react-select';
import { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesListItem from './MoviesListItem';

const Test = () => {
    const [movies, setMovies] = useState([])
    const [moviesObject, setMoviesObject] = useState([])
    
    // useEffect(,)
        

        useEffect(() => {
        fetch('films.json')
        .then(response => response.json())
        .then(data => {
        //     // console.log('Movies Data: ',data);
        //     // for (const movie of data) {
        //     //     console.log(movie)
        //     // }
            setMovies(data)
        })
          },moviesObject);

        //   console.log(movies[0].title)

          // need to get single movies title
            // movies[iteration].title
        let moviesArr = []
        // with a for loop
        for (let i = 0; i < movies.length; i++) {
            let singleMovie = movies[i];
            // console.log(singleMovie)
            moviesArr.push(singleMovie.title)
            // console.log('Movies Array:',moviesArr)
        }

        // we have all the titles stored into a single array, now, each title needs to be put as a key into an single object....... lets try
        let filmTitlesArr = []
        for (let i = 0; i < moviesArr.length; i++) {
            const title = moviesArr[i];
            let filmsTitle = {
                label: title,
                value: i+1000
            }
            filmTitlesArr.push(filmsTitle)
        }
        console.log(filmTitlesArr)


          // find a way to get each movie title ([iteration].title) into the structure of films array of objects below

          // SUCCESSEFULLY RENDERED THE DATA INTO THE SELECTION
    
    
        
    

    // for (const movie of movies) {
    //     setMoviesObject(movie.title)
    // }
    // console.log(moviesObject)

    // const singleFilm = { label: movies[0].title }
    // console.log(singleFilm)
    // console.log(movies[0])
    
    const films = [
        { label: "Albania", value: 355 },
        { label: "Argentina", value: 54 },
        { label: "Austria", value: 43 },
        { label: "Cocos Islands", value: 61 },
        { label: "Kuwait", value: 965 },
        { label: "Sweden", value: 46 },
        { label: "Venezuela", value: 58 }
      ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <Select options={filmTitlesArr} />
                </div>
            </div>
        </div>
    );
};

export default Test;