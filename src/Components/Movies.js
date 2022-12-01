import { useEffect , useState } from "react"
import "./Movies.css"


export default function Movies(){
    const [movies , setMovies] = useState([])
    const [selects , setSelects] = useState({})
    const movieData = `films.json`

    useEffect(() => {
        fetch(movieData)
        .then((res) => res.json())
        .then((res) => {
            setMovies(res)
        })
    }, [])

    function handleChoice(e){
        const change = e.target.value
     const found = movies.find(item => item.id === change)
     setSelects(found || {})
 }


    return(
        <div className="movies">
            <h2>Select a Movie</h2> 
            <br></br>
            <div className="selectBar">
             <select onChange={handleChoice}>
            <option value=""></option>
            {movies.map((movie) => {
                return(
                    <option key={movie.id}value={movie.id}>{movie.title}</option>
                )
            })}
        </select>
            </div>
            
            <br></br>

        {selects.id ? (
            <div>
                <h2>Title: {selects.title}</h2>
                <p className="release"><span style={{fontWeight: "bold"}}>Release Date:</span> {selects.release_date}</p>
                <p className="description"><span style={{fontWeight: "bold"}}>Description:</span> {selects.description}</p>
            </div>
        ): null}
        </div>
    )}