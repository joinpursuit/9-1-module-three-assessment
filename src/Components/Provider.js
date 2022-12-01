import { createContext, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { fetchData } from "../Functions/fetch";

// Declare variable for data consumption
export const ContextData = createContext()


function Provider(props) {
    // Declare states for movie, people, and location data
    const [movies, setMovies] = useState([])
    const [people, setPeople] = useState([])
    const [locations, setLocations] = useState([])

    return (
       <ContextData.Provider value ={{
        movies,
        setMovies,
        people,
        setPeople,
        locations,
        setLocations,
        fetchData,
       }}>
        <Nav />
        <Footer />
        {props.children}
       </ContextData.Provider>
    );
}

export default Provider;