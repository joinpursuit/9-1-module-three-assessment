import { useContext, useEffect, useState } from "react";
import { ContextData } from "../Provider";
import './People.css'

function People(props) {
    const {people, setPeople, fetchData} = useContext(ContextData)

    // declare state for search input
    const [searchInput, setSearchInput] = useState("")
    // declare state for person info
    const [personInfo, setPersonInfo] = useState({
        name: "",
        age: "",
        gender:"",
    })
    // declare state for notFound
    const [notFound, setNotFound] = useState(false)

    // function onChange for search input
    function handleTextInput(e) {
        setSearchInput(e.target.value)
    }
    // function to handle form Submit
    function handleSubmit(e) {
        e.preventDefault()
        // turn name value to array use includes to find match if user types in one part of character name (lusheeta => Lusheeta Toel Ul Laputa )
        const find = people.find(({name}) => name.toLowerCase().split(` `).includes(searchInput.toLowerCase()))
        
        if(!find){
            setPersonInfo({
                name: "",
                age: "",
                gender:"",
            })
            setNotFound(true)
        }
        else {
            setNotFound(false)
            setPersonInfo({
                name: find.name,
                age: find.age,
                gender: find.gender
            })
        }
        setSearchInput("")

    }


    useEffect(() => {
        fetchData(`people`)
        .then(respJson => setPeople(respJson))
        .catch(err => console.log(err))
    }, [])
    return (
        <div className='people'>
            <h2>Search for a Person</h2>

            <form onSubmit={(event)=> handleSubmit(event)} >
                <input
                type= "text"
                placeholder="Enter a character name..."
                value={searchInput}
                onChange = {(event) => handleTextInput(event)}>
                </input>

                <button
                type='submit'
                >Submit</button>
            </form>

            <section>
                {
                    personInfo.name &&
                     <div className="characterInfo">
                        <h3>Name: {personInfo.name}</h3>
                        <p>Age: {personInfo.age}</p>
                        <p>{personInfo.gender}</p>
                    </div> || notFound && <span>Not Found</span>
                } 
              

            </section>
        </div>
    );
}

export default People;