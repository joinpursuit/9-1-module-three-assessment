import { render } from '@testing-library/react';
import React from 'react';
import { useState, useEffect } from "react"

import LocationListItem from './LocationListItem';

const Locations = () => {
    const [renderLocationsButton, setRenderLocationsButton] = useState(false)
    const [locationsObject, setLocationsObject] = useState([])

    
    
    const handleSubmitRLB = (event)=> {
        event.preventDefault()
        renderLocationsButton ? setRenderLocationsButton(false) : setRenderLocationsButton(true)
        // console.log('Locations.js - handleSubmitRLB function - boolean set to: ',{renderLocationsButton})
        // fetch('locations.json')
        // .then(response => response.json())
        // .then(data => {
        //     setLocationsObject(data)
        // })
        console.log(locationsObject)
        // const locationMap = locationsObject.locations.map( location => {
        //     return <LocationListItem locationMap={location} />

        // })
    }
    useEffect(() => {
        fetch('locations.json')
        .then(response => response.json())
        .then(data => {
            setLocationsObject(data)
        })
      }, [])

    return (
        <>
        <div className='locations'>
            
            <h2>List of Locations</h2>

            <form onSubmit={handleSubmitRLB}>
                <button type='submit'>
                {!renderLocationsButton ? 'Show Locations' : 'Hide Locations'}
                </button>
            </form>
            <ul>

            { renderLocationsButton ? locationsObject.map((location) => {
                return <LocationListItem location={location}/>
            }) : null }
            </ul>

            {/* {!renderLocationsButton ? <LocationListItem/> : 'Hide Locations'} */}

            {/* <ul>
                <LocationListItem locations={locationsObject} />
            </ul> */}
            {/* <section className="locations-list">
                { locationsObject.map(( location ) => {
                return <LocationListItem />
                })}
            </section> */}
            
        </div>
        </>
    );
};

export default Locations;