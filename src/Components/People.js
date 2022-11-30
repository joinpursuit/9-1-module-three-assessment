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
        <div>
            <h2>Search for Person</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
            <lable htmlFor="name">Search: </lable>
                <input
                type="text"
                id="name"
                placeholder="Haku"
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
                />

            <button type="submit">Submit</button>
            </form>
            {input.id ? (
                <div>
                    <h3 className="character">Name: {input.name}</h3>
                    <p className="age"><span style={{fontWeight: "bold"}}>Age:</span> {input.age}</p>
                    <p className="eyes"> <span style={{fontWeight: "bold"}}>Eye Color:</span> {input.eye_color}</p>
                    <p className="hair"> <span style={{fontWeight: "bold"}}>Hair Color:</span> {input.hair_color}</p>
                </div>
            ) : "Not Found"}
        </div>
    )
}