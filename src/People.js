import { useState, useEffect} from 'react'
import Error from './Error'

export default function People () {

    const [people, setPeople] = useState([])
    const [loadingError, setLoadingError] = useState(false)
    const [name, setName] = useState('')
    const [input, setInput] = useState({})

    useEffect(() => {
        fetch('people.json', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(people => setPeople((people))
        .catch((error) => {
            console.log(error)
        }
    ))
        }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const found = people.find(each => each.name.toLowerCase() === name.toLowerCase())
        setInput(found || <Error />)
        setName("")
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

                {loadingError ? (<Error />) : input.id && (
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