import { useState, useEffect} from 'react'

export default function People () {

    const [people, setPeople] = useState([])
    const [person, setPerson] = useState({})
    const [name, setName] = useState('')
    const [input, setInput] = useState({})

    useEffect(() => {
        fetch('people.json', {
    method: 'GET',
    headers: { 'Accept': 'application/json', },
    })
        .then(res => res.json())
        .then(people => setPeople((people)))
        }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const found = people.find(each => each.name.toLowerCase() === name.toLowerCase())
        setInput(found || {})
    }

    return (
        <div className='people'>
            <h1>Search For A Person</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    <input value={name} onChange={(e) => {setName(e.target.value)}}
                    type='text'
                    placeholder='Enter A Name'>
                    </input>
                </label>

                <button type="submit">
                    Submit
                </button>

                {input.id && (
                    <div>
                        <h1>Name: {input.name}</h1>
                        <p>Age: {input.age}</p>
                        <p>Hair Color: {input.hair_color}</p>
                        <p>Eye Color: {input.eye_color}</p>
                    </div>
                )}
            </form>
        </div>
    )
}