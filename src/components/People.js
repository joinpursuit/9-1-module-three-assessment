import React, { useState, useEffect } from "react"
import Person from "./Person"

export default function People() {
  const [person, setPerson] = useState(null)
  const [people, setPeople] = useState([])
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("./people.json")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => console.log(err))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const founded = people.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    )
    if (!founded) {
      setError("Not Found")
    } else {
      setPerson(founded)
      setName("")
    }
  }

  return (
    <div className="people">
      <h1>Search for a Person</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nameSearch">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="Submit">Submit</button>
      </form>
      {error ? "Not Found" : null}
      {person ? <Person person={person} /> : null}
    </div>
  )
}
