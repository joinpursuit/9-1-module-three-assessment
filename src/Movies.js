import { useState, useEffect } from "react";



export default function Movies () {
    const [data, setData] = useState([])
    const [single, setSingle] = useState({})

    useEffect(() => {
        fetch('films.json', {
    method: 'GET',
    headers: { 'Accept': 'application/json', },
    })
        .then(res => res.json())
        .then(data => setData((data)))
        }, [])
        
    console.log(data)
    
    const handleChoice = (e) => {
        const chosen = e.target.value
        const found = data.find(movie => movie.id === chosen)
        setSingle(found || {})
    }
    
          return (
            <div className="movies">
                <select onChange={handleChoice}>
                    <option value=''></option>
                    {data.map((choice) => (
                        <option key={choice.id} value={choice.id}>{choice.title}</option>
                    ))}
                </select>
                {single.id && (
                    <div className="details">
                        <h1>Title: {single.title}</h1>
                        <p>Release Date: {single.release_date}</p>
                        <p>Description: {single.description}</p>
                    </div>
                )}
            </div>
          ) // End of return.
} // End of movies function.
      
