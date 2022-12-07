import React from 'react';

const PeopleRender = ( personObject ) => {
    console.log(personObject)
    const personName = personObject.person.name
    const personAge = personObject.person.age
    const personEye = personObject.person.eye_color
    const personHair = personObject.person.hair_color

    console.log(personName)

    return (
        <ul>
            <h2>Name: {personName} </h2>
            <p><span>Age: </span>{personAge}</p>
            <p><span>Eye Color: {personEye}</span> </p>
            <p><span>Hair Color: {personHair}</span> </p>
        </ul>
    );
};

export default PeopleRender;