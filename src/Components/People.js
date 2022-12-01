import React, {useState, useEffect} from 'react';
import "./People.css"

const People = () => {
    const [people, setPeople] = useState([])
    const [input, setInput] = useState({})
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const found = people.find(item => item.name.toLowerCase() === name.toLowerCase())
        setInput(found)
        setName("")
    }

    useEffect(()=>{
        fetch('/people.json')
            .then((res)=>res.json())
            .then((data)=>{
                setPeople(data)
                // console.log(data)
            })
            .catch((err)=>{
                console.log(err)
            }) 
    },[])

    return (
        <div className='.people'>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor='person'>
                    <input 
                    type="text" 
                    placeholder="Haku, Pazu..." 
                    value={name} 
                    onChange={(e)=>{setName(e.target.value)}}/>
                </label>
                    <button type="submit">Submit</button>
                </form>
                {input.id ? (
                <div className='res'>
                    <h1>Name: {input.name}</h1>
                    <p>Age: {input.age}</p>
                    <p>Gender: {input.gender}</p>
                </div> ) : <p className='res'>Not Found</p>}
        </div>
    );
};

export default People;