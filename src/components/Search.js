import { useState } from "react"

export default function Search({handlePerson, setPassed, passed}) {
    const [searchTitle, setSearchTitle] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
       handlePerson(searchTitle)
    }


    function handleTextChange(event) {
        setSearchTitle(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit} >
        <label>
          <input
            id="searchBar"
            type="text"
            name="search"
            onChange={handleTextChange}
            placeholder="Search..."
          />
        </label>
        <button className="searchButton" type="submit">Submit</button>
      </form>
    )
}