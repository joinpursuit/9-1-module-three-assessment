import { useState } from 'react'

function People({people}) {
    const [name, setName] = useState('')
    const [person, setPerson] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleTextChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const searched = people.find(person => person.name.toLowerCase() === name.toLowerCase())
        setPerson(searched || {})
        setName('')
        setSubmitted(true)
    }

    return (
        <div className="people">
            <h1>Search for a Person</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleTextChange} value={name}/>
                <button>Submit</button>
            </form>
            {
                person.id && (
                    <>
                        <h2>Name: {person.name}</h2>
                        <p>Age: {person.age}</p>
                        <p>Eye Color: {person.eye_color}</p>
                        <p>Hair Color: {person.hair_color}</p>
                    </>
                )
            }
            {!person.id && submitted ? <p>Not Found</p> : null}
        </div>
    );
}

export default People;