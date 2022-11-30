import { useContext, useEffect } from "react";
import { ContextData } from "../Provider";
import './People.css'

function People(props) {
    const {people, setPeople, fetchData} = useContext(ContextData)

    useEffect(() => {
        fetchData(`people`)
        .then(respJson => setPeople(respJson))
        .catch(err => console.log(err))
    })
    return (
        <div className='people'>
            <h2>Search for a Person</h2>

            <form>
                <input
                type= "text">
                </input>

                <button
                type='button'
                >Submit</button>
            </form>
        </div>
    );
}

export default People;