import { useEffect , useState } from "react"
import './People.css'


export default function People(){
const [people , setPeople] = useState([])
const [search , setSearch] = useState("")
const [input , setInput] = useState({})


const peopleData = 'people.json'

    useEffect(() => {
        fetch(peopleData)
        .then((res) => res.json())
        .then((res) => {
            setPeople(res)
        })
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        const found = people.find(item => item.name.toLowerCase() === search.toLowerCase())
        setInput(found || {})
        setSearch("")
    }



    return(
        <div className="people">
            <h2>Search for a Person</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
                <input
                id="name"
                type="text"
                placeholder="Haku"
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
                />
            <button type="submit">Submit</button>
            </form>
            <div className="output">

            {input.id ? (
                <div>
                    <h3 className="character">Name: {input.name}</h3>
                    <p className="gender"><span style={{fontWeight: "bold"}}>Gender:</span> {input.gender}</p>
                    <p className="age"><span style={{fontWeight: "bold"}}>Age:</span> {input.age}</p>
                    <p className="eyes"> <span style={{fontWeight: "bold"}}>Eye Color:</span> {input.eye_color}</p>
                    <p className="hair"> <span style={{fontWeight: "bold"}}>Hair Color:</span> {input.hair_color}</p>
                </div>
            ) : "No Founds"}
        
            </div>
        </div>
    )
}