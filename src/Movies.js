import React from 'react';
import { useState, useEffect } from "react";

const Movies = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    useEffect(() => {
        fetch('films.json')
        .then(response => response.json())
        .then(json => console.log(json));

    })

    return (
        <>
        <h1>Select a Movie</h1>
        <button onClick={handleOpen}>Dropdown</button>
        {open ? (
            <ul className="menu">
                <li clasName='menu-item'>
                    <button>example 1</button>
                </li>
                <li clasName='menu-item'>
                    <button>example 2</button>
                </li>
            </ul>
        ) : null }
        {open ? <div>Is Open</div> : <div>Is Closed</div>}  
        </>
    );
};

export default Movies;