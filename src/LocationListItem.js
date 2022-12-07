import React from 'react';

const LocationListItem = (location) => {
    // console.log(' LocationListItem.js - ',locationsObject.locations)

    // const locationMapName = locationsObject.locations.map(({ name }) => name)
    // // const renderListOfLocationsName = (names) => {
    // //     return names.map(name => <li>{name}</li>)
    // // }
    console.log(location.location)


    return (
            <li>
                <p><span>Name: </span>{location.location.name} </p>
                <p><span>Climate: </span>{location.location.name} </p>
                <p><span>Name: </span>{location.location.terrain} </p>
                <br></br>
                {/* {renderListOfLocationsName(locationsObject)} */}
            </li>  
    );
};

export default LocationListItem;