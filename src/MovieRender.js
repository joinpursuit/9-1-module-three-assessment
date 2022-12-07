import React from 'react';

const MovieRender = (movie) => {

    const title = movie.movie.title
    const releaseDate = movie.movie.release_date
    const description = movie.movie.description
    
    return (
        <div>
            <br></br>
            <h2> Title: {title} </h2>
            <p> Release Date: {releaseDate} </p>
            <p> Description: {description} </p>
        
        </div>
    );
};

export default MovieRender;