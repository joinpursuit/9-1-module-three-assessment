import React from 'react'
import {useEffect, useState} from "react"

export default function People() {


const[peopleData, setPeopleData] =useState([])
const[personSearchInput, setPersonSearchInput] =useState({})
const [personName, setPersonName] = useState("")
//allows asynchronous fetching
useEffect(() => {
  fetch('people.json')
  .then(res => res.json())
  .then((data)=> setPeopleData(data))
  .catch((err) => console.log(err)
)
},[])

const handleSubmit = (e) =>{
  e.preventDefault()
  // const selectedPerson = e.target.value
  const foundPerson = peopleData.find((person) => person.name.toLowerCase() === personName.toLowerCase())
    setPersonSearchInput(foundPerson || {})
    resetForm()
  }
  function resetForm(){
    setPersonName("")
  }

return (

  <div className='people'>
         <h2 className='peopleListHeading'>Search for a Person</h2><br/>

<form className="peopleForm"  onSubmit={handleSubmit}>
  <label htmlFor="personName">
    <input
     className='peopleInputField'
      value={personName}
      onChange={(e) => {
        setPersonName(e.target.value)
      }}
      type="text"
      placeholder ='Please enter a Name,e.g "Pazu", "Duffi", Lusheeta, Captain Dola'
    />
  </label>
  <button type="submit">Submit</button>
</form>
<>
 
  {personSearchInput.id ? (
    <div className='peopleInputBox'>   
          <p><strong>Name:</strong><span>{personSearchInput.name}</span></p>
          <p><strong>Age: </strong>       {personSearchInput.age}</p>
          <p><strong>Gender:</strong>     {personSearchInput.gender}</p>
          <p><strong>Eye Color:</strong>  {personSearchInput.eye_color}</p>
          <p><strong>Hair Color: </strong>{personSearchInput.hair_color}</p>
    </div>
    )
    :
      <p className='personNotFoundMsg'>{("Person Not Found")}</p>
    } 
    </>
  

   </div>
 )
}
// {personSearchInput.id ? (
//   <div className='peopleInputBox'>   
//         <p><strong>Name:</strong><span>{personSearchInput.name}</span></p>
//         <p><strong>Age: </strong>       {personSearchInput.age}</p>
//         <p><strong>Gender:</strong>     {personSearchInput.gender}</p>
//         <p><strong>Eye Color:</strong>  {personSearchInput.eye_color}</p>
//         <p><strong>Hair Color: </strong>{personSearchInput.hair_color}</p>
  //       :
  // <p>Person Not Found</p>
  // </div>
  // )}