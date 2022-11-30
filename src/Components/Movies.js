import { useEffect , useState } from "react"
import "./Movies.css"


export default function Movies(){
    const [movies , setMovies] = useState([])
    const [select , setSelect] = useState({})
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
     setSelect(found || {})
 }


    return(
        <div>
            <h2>Select a Movie</h2>
             <select onChange={handleChoice} className="selectBar">
            <option value=""></option>
            {movies.map((movie) => {
                return(
                    <option key={movie.id}value={movie.id}>{movie.title}</option>
                )
            })}
        </select>
        {select.id ? (
            <div>
                <h2><span style={{fontWeight: "bold"}}>Title:</span> {select.title}</h2>
                <p className="release"><span style={{fontWeight: "bold"}}>Release Date:</span> {select.release_date}</p>
                <p className="description"><span style={{fontWeight: "bold"}}>Description:</span> {select.description}</p>
            </div>
        ): null}
        </div>
    )}