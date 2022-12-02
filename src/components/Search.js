import { useState } from "react"

export default function Search({handlePerson, setPassed, passed}) {
    const [searchTitle, setSearchTitle] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
       handlePerson(searchTitle)
       setSearchTitle("")
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
            value={searchTitle}
            onChange={handleTextChange}
          />
        </label>
        <button className="searchButton" type="submit">Submit</button>
      </form>
    )
}