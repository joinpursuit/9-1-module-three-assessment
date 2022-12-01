// create a select drop down menu 
//Has the text "Select a Movie" on the page.



// fix when it's blank as a selection need to figure out 

import React from 'react';
import { useState, useEffect } from 'react';

const Movies = () => {
    const [data, setData] = useState([])
    const [filmInfo, setFilmInfo]=useState({})


    useEffect(()=>{
    fetch('./films.json')
    .then((res) => res.json())
    .then((films)=>
    {setData(films)
    console.log(films)})
    .catch ((err)=>{
        console.log(err)
    })
    }, [])
    const handleChoice = (e) => {
        const selected = e.target.value 
        const found = data.find(films =>films.title === selected)
        setFilmInfo(found || {})
    }
    return ( 
        <div className='movies'>
            <h1>Select a Movie</h1>
            <select onChange={handleChoice}>
                <option value =""></option>
                {
                    data.map((item)=> (
                        <option key={item.title} value={item.title}>{item.title}</option>
                    ))
                }
            </select>
            {filmInfo.title && (
               <div>
                <h2>Title: {filmInfo.title}</h2>
                <p>Release: {filmInfo.release_date}</p>
                <p>Description: {filmInfo.description}</p>
               </div>
            )}
        </div>
    );
};

export default Movies;