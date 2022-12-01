import Search from "./Search"
import { useState } from "react"
import peopleData from "../people.json"

export default function People() {
    const [personData, setPersonData] = useState({})
    const [passed, setPassed] = useState(false)

    function handlePerson(search) {
        let foundPerson = peopleData.find((person) => {return person.name === search})
        setPersonData(foundPerson)
        setPassed(true)
    }

    function searchCondition() {
        if (passed === false) {
            return null
        } else if (passed && personData === undefined) {
            return <p>Not Found</p>
        } else {
            return <h1><span>Name:</span> {personData.name}</h1>
        }
    }

    return (
        <div>
        <h1>Search for a Person</h1> 
        <Search handlePerson={handlePerson} setPassed={setPassed} passed={passed}/>
        <div>{searchCondition()}</div>
        </div>
    )
}