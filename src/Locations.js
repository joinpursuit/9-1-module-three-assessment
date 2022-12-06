import React from 'react';
import { useState, useEffect } from "react"

const Locations = () => {
    const [renderLocationsButton, setRenderLocationsButton] = useState(false)
    
    const handleSubmitRLB = (event)=> {
        event.preventDefault()
        renderLocationsButton ? setRenderLocationsButton(false) : setRenderLocationsButton(true)
        // console.log('Locations.js - handleSubmitRLB function - boolean set to: ',{renderLocationsButton})
    }



    return (
        <>
        <div className='locations'>
            <h2>List of Locations</h2>

            <form onSubmit={handleSubmitRLB}>
                <button type='submit'>
                    Show Locations
                </button>
            </form>
            
        </div>
        </>
    );
};

export default Locations;