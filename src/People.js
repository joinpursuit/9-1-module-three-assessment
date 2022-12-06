import React from 'react';
import Select from 'react-select';
import { useState, useEffect } from "react";

const People = () => {
    const [formStateValue, setFormStateValue] = useState ("")

    const searchPersonData = event => {
        event.preventDefault()
        console.log ('searchPersonData function, form selection: ',event.label)
    }

    return (
        <div className='people'>
            <h2>Search for a person</h2>
            <form>
                <label>
                    <input type="text" onChange={searchPersonData} value={formStateValue}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default People;