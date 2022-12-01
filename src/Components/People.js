import React from 'react'
import {useEffect, useState, useParams} from "react"

export default function People() {


const[peopleData, setPeopleData] =useState([])
const[thisPerson, setThisPerson] =useState({})

//allows asynchronous fetching
useEffect(() => {
  fetch('people.json')
  .then(res => res.json())
  .then((data)=> setPeopleData(data))
  .catch((err) => console.log(err)
)
},[])

const handleSelection = (e) =>{
  const selectedPerson = e.target.value
  const foundPerson = peopleData.find((person) => person.id === selectedPerson)
  setThisPerson(foundPerson || {})
}

return (
  <>
  <div className='people'>
    <h2 className='peopleListHeading'>Search for a Person</h2><br/>
    <div className='peopleList'>
    <select onChange={handleSelection}>
      <option value=''></option>
      {peopleData.map(person =>( 
          <option key={person.id} value={person.id}>
              {person.name}
          </option>
      ))}
    </select><br/>
    <br/> <br/>
    {thisPerson.id && (
      <div className='personBox'>
        <div className='personInfo'>
          <div className='personTitleDiv'>
          <h2 className='personName'>Name:</h2><span>{thisPerson.name}</span> 
          <span className='personAge'>{thisPerson.age}</span> </div><br/>
          <div><h4 className='personGender'> Gender:</h4><span>{thisPerson.gender}</span></div>
          <p className='personEyeColor'>{thisPerson.eye_color}</p>
          <p className='personEyeColor'>{thisPerson.hair_color}</p>
        </div>
      </div>
    )}
    </div>
  </div>
</>
)
}
