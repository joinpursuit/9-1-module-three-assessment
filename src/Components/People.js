import React, {useState, useEffect} from 'react';

const People = () => {
    const [people, setPeople] = useState([])
    const [input, setInput] = useState({})
    const [name, setName] = useState("")

    

    const handleSubmit = (e) => {
        e.preventDefault()
        const found = people.find(item => item.name.toLowerCase() === name.toLowerCase())
        setInput(found || console.log("not found"))
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
            <form onSubmit={handleSubmit}>
                <label htmlFor='person'>
                    <input 
                    type="text" 
                    placeholder="Haku, Pazu..." 
                    value={name} 
                    onChange={(e)=>{setName(e.target.value)}}/>
                </label>
                    <button type="submit">Submit</button>
                </form>

                {input?.id && (
                    <div>
                       <h1>Name: {input.name}</h1>
                        <p>Age: {input.age}</p>
                        <p>Gender: {input.gender}</p>
                    </div>
                )}
        </div>
    );
};

export default People;