import React, { useState, useEffect } from "react"

export default function People() {
  const [person, setPerson] = useState()
  const [people, setPeople] = useState([])
  const [name, setName] = useState()
  useEffect(() => {
    fetch("./people.json")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => console.log(err))
  }, [])

  function handleSubmit(e) {
    const picked = e.target.value
    const founded = people.find(
      (item) => item.name.toLowerCase() === picked.name.toLowerCase()
    )
    if (!founded) {
      return "Not Found"
    } else {
      setPeople(founded)
    }
  }
  return null
  //   return (
  //     <div className="people">
  //       <h1>Search for a Person</h1>

  {
    /* <form onSubmit={handleSubmit}>
        <label htmlFor="nameSearch">
            <input 
            type="text"
            value={}
            onChange={}
            />
        </label>
        <button type="Submit">Submit</button>
      </form> */
  }
  //     </div>
  //   )
}
