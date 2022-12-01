import React from 'react';

function LocationThumbnail({name, climate, terrain}) {
    return (
        <li>
            <ul className='locationThumbnail'>
                <li>Name: {name}</li>
                <li>Climate: {climate}</li>
                <li>Terrain: {terrain}</li>
            </ul>

            
        </li>
    );
}

export default LocationThumbnail;